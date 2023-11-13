---
title: Bubble chart
fileSource: d3-chart
tabs: Design('bubble-chart'), A11y('bubble-chart-a11y'), API('bubble-chart-api'), Examples('bubble-chart-d3-code'), Changelog('d3-chart-changelog')
---

::: tip
Basic data visualization rules are described in the [Chart principles](/data-display/d3-chart/d3-chart).
:::

::: react-view

<script lang="tsx">
import React from 'react';
import PlaygroundGeneration from '@components/PlaygroundGeneration';
import { chartPlayground } from '@components/ChartPlayground';
import { Chart, BubbleChartProps } from '@semcore/d3-chart';
import resolveColor from '@semcore/ui/utils/lib/color';

const data = [
  { x: 2, y: 3, value: 5040, label: 'label 1' },
  { x: 1, y: 9, value: 40, label: 'label 2' },
  { x: 6, y: 2, value: 45634, label: 'label 3' },
  { x: 4, y: 7, value: 245, label: 'label 4' },
  { x: 9, y: 5, value: 7462, label: 'label 5' },
];

const App = PlaygroundGeneration((preview) => {
  const { select, radio, label, bool } = preview('Chart.Line');

  const {
    direction,
    alignItems,
    justifyContent,
    showXAxis,
    showYAxis,
    showTooltip,
    showLegend,
    legendProps,
  } = chartPlayground({ select, radio, label, bool });

  legendProps.shape = 'Circle';

  const chartProps: BubbleChartProps = {
    data,
    plotWidth: 300,
    plotHeight: 200,
    direction,
    showTooltip,
    showXAxis,
    showYAxis,
    alignItems,
    justifyContent,
  };

  if (showLegend) {
    chartProps.legendProps = legendProps;
  } else {
    chartProps.showLegend = false;
  }

  return <Chart.Bubble {...chartProps} />;
}, {filterProps: ['data']});

</script>

:::

## Description

A **bubble chart** visualizes relationships between data categories using proportions, colors, and positioning on a coordinate axis. This chart type helps you analyze patterns between datasets.

It allows to visualize up to 3-4 parameters for datasets. A bubble chart is a mix between a scatterplot chart and a proportional area chart.

As the documentation for [Microsoft Office](https://en.wikipedia.org/wiki/Microsoft_Office) explains, "You can use a bubble chart instead of a scatterplot chart if your data has three data series that each contain a set of values. The sizes of the bubbles are determined by the values in the third data series.".

**Use the bubble chart, when you need to visualize:**

- patterns between data categories.
- the third or fourth dimension of the data (the size and color of the bubbles, respectively).

::: tip
A bubble chart is a variation of a scatterplot chart, but with one or two additional dimensions added to the data (the size and color of the circles, respectively).

**Note that the more colors you use for the categories, the harder it will be to read the chart.**
:::

## Appearance

**A bubble plot chart must contain:**

- vertical lines (in addition to horizontal);
- labels for the X and Y axes (don't color them, as this makes the chart harder to read);
- a legend if the dataset has different categories, each with a different color.

::: tip
Make sure to add information on what the bubble size means.
:::

| Case             | Appearance example                                     | Styles                                                                                                                                                                                                                                                                                                           |
| ---------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| One dataset      | ![](static/positive-correlation-1.png)      | The default color for the category is `--chart-palette-order-blue` (or `--blue-300`) with 50% transparency. If necessary, you can select any other color from the chart palette. A bubble always has a 2px white stroke. The center of the bubble is marked with a cross in the same color as the circle itself. |
| Several datasets | ![](static/positive-correlation-2.png) | Use colors from the chart palette.                                                                                                                                                                                                                                                                               |

### Text labels for bubbles

If you need captions for bubbles (in addition to the legend), show captions to the right or left of the bubble. Keep in mind that adding such captions to a data-dense chart can make the chart hard to read.

::: tip
Remember to check contrast for the text labels. We don’t recommend to use light colors from the palette for the Bubble chart data. Use colors with 400 shade and higher, they have the minimum necessary contrast with the white background.
:::

![](static/labels.png)

## Legend

- If there are multiple datasets in the chart, show the legend. Provide values for each dataset.
- We recommend using the vertical legend. It makes categories and their meaning easier to read.

![](static/positive-correlation-2.png)

## Interaction

- When hovered, a bubble changes its opacity to 80%, and the tooltip displays the values for this bubble.
- If by clicking on the bubble you can go somewhere or open an additional report, then the cursor must change into a `pointer`.

![](static/hover-1.png)

## Tooltip

Show the following values in the tooltip for this chart type:

- the value for the point on the X-axis;
- the value for the point on the Y-axis.
- sometimes it is necessary to show a third value for a bubble, which affects its size (this may be the difference between the axes, or there may be a different value).

**In the tooltip, focus on values rather than axis names or data categories.**

If you have several datasets on the chart, then it is important to show their color in the tooltip. Sometimes it is necessary to show a third value for a bubble, which affects its size (this may be the difference between the axes, or there may be a different value).

| Case             | Appearance example                                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| One dataset      | ![](static/hover-2.png)                                                         |
| Several datasets | ![](static/hover-1.png) ![](static/hover-3.png) |

## Bubbles intersection

For this type of charts, we don’t show values for the intersection of categories. On hovering over a specific circle, we show the values for that circle only.

![](static/hover-1.png)

## Edge cases

Here you will find the states for some specific cases. All other "empty states" for widgets are specified in [Error & n/a widget states](/components/widget-empty/widget-empty).

| Case                                   | Description                                                                                                                                                                                                       | Appearance example                                                    |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Outliers                               | To prevent small values from being lost under the large ones (outliers), the bubble has a minimum size – 11px * 11px.                                                                                            | ![](static/outliers-1.png) ![](static/outliers-2.png) |
| Data values are null                   | If all the values on the chart are zero, display them at the origin of the grid. For cases where you compare multiple datasets, show the values for each dataset in the legend. **Zero is also data. 0 ≠ N / A.** | ![](static/null-1.png) ![](static/null-2.png)                 |
| No data for some points (n/a)          | Don't show points without data on the chart. For cases where you compare multiple datasets, show the values for each dataset in the legend.                                                                       | ![](static/n-a-1.png) ![](static/n-a-2.png)             |
| A point is very close to the axis/axes | Cut the bubbles next to the X and Y axes under the axes.                                                                                                                                                          | ![](static/cut.png)                             |
| First time loading                     | Show the skeleton state. If the chart has a title, it should be displayed while the chart is loading. The user must understand what exactly is being loaded and whether they should wait for it.                  | ![](static/bubble-chart-skeleton.png)          |

## UI/UX use

### Subheading with additional information

::: tip
Accompany the bubble chart with additional information on what determines the size of the circles.
:::

![](static/ux-1.png)

### Axes

- Label both the X and Y axes.
- Don't color the axis labels – this makes your chart harder to read.

![](static/color-yes-no.png)

### Chart size

Don't place bubble charts in a small widget (the medium size of the usual small widget in our products).

The data will be difficult to read and compare.

![](static/size-yes-no.png)

### Number of datasets

::: tip
The more datasets you cram into your scatterplot chart, the harder it is to read.
:::

![](static/categories-yes-no.png)
