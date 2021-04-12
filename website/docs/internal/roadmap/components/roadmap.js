import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tabs from '@semcore/tab-panel';

import dayjs from 'dayjs';
import 'dayjs/locale/en';
import { css } from '@semcore/core';

const styles = css`
  STabPanelItem {
    &:active,
    &[active] {
      color: #ff622d;
    }
  }
`;

const LinkComponent = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Oval = styled.span`
  display: inline-block;
  margin-right: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const Legenda = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 0 16px !important;
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
  }

  li:first-child {
    span {
      background: rgba(184, 128, 255, 0.4);
    }
  }

  li:nth-child(2) {
    margin-left: 24px;
    span {
      background: #b880ff;
    }
  }
`;

dayjs.locale('ru');
// 1month = 2sprints
// 1q = 3months
function generateSprint(startDay, finishDay) {
  const dateSprint = [startDay];
  let lastDay = startDay;
  while (lastDay < finishDay) {
    const next = lastDay.add(14, 'day');
    lastDay = next;
    dateSprint.push(next);
  }
  return dateSprint;
}

const year2020 = generateSprint(dayjs('2020-01-06'), dayjs('2020-12-27'));
const year2021 = generateSprint(dayjs('2021-01-18'), dayjs('2021-12-30'));
const dateSprint = [...year2020, ...year2021];

const components = {
  'Q1 2020': [
    { text: 'z-index', size: { kit: '1/13' } },
    { text: 'a11y', size: { kit: '1/13' } },
    { text: 'Intergalactic enchancement 💪', size: { kit: '1/7' } },
    { text: 'Pagination', name: 'pagination', size: { kit: '3/7' } },
    { text: 'Fullscreen modal 👑', size: { ui: '3/7' } },
    { text: 'ChartHead', size: { kit: '5/7' } },
    { text: 'ChartLegend', size: { kit: '5/7' } },
    { text: 'Drag & drop', size: { ui: '5/11' } },
    { text: 'FullscreenModal', size: { ui: '5/11', kit: '11/13' } },
    { text: 'Component 2.0', size: { kit: '7/13' } },
    { text: 'ComplexExport', size: { ui: '9/11' } },
    { text: 'DivergingBar Chart', size: { ui: '11/13' } },
    { text: 'WizardModal 🧙🏻', size: { ui: '1/13' } },
    { text: 'ColorPicker input', size: { ui: '1/13' } },
  ],
  'Q2 2020': [
    { text: 'Component 2.0', size: { kit: '1/15' } },
    { text: 'FullscreenModal', size: { kit: '1/5' } },
    { text: 'Themes enchancement 💪', size: { kit: '3/9' } },
    { text: 'Drag & drop', size: { kit: '5/15' } },
    { text: 'PanelSummary', size: { ui: '5/15' } },
    { text: 'Funnel chart', size: { ui: '9/13' } },
    { text: 'Table enchancement 💪', name: 'table', size: { kit: '13/15' } },
    { text: 'TableData 💪', size: { kit: '13/15' } },
    { text: 'Counter', size: { kit: '13/15' } },
    { text: 'WizardModal 🧙🏻', size: { ui: '1/15' } },
  ],
  'Q3 2020': [
    { text: 'Documentation enchancement 💪', size: { kit: '1/15' } },
    { text: 'TableData 💪', size: { kit: '1/11' } },
    { text: 'Relise system research', size: { kit: '1/9' } },
    { text: 'SidePanel (Drawer)', size: { ui: '1/7', kit: '3/7' } },
    { text: 'Intergalactic enchancement 💪', size: { ui: '3/15' } },
    { text: 'Counter', size: { kit: '5/7' } },
    { text: 'ProjectSelect', size: { ui: '5/11' } },
    { text: 'Drag & drop', size: { kit: '7/11' } },
    { text: 'Funnel chart', size: { ui: '7/11' } },
    { text: 'Chart library research', size: { kit: '11/15' } },
    { text: 'Filters', size: { ui: '9/15' } },
    { text: 'a11y recommendations', size: { ui: '13/15' } },
    { text: 'MediaModal', size: { ui: '13/15' } },
  ],
  'Q4 2020': [
    { text: 'Documentation enchancement 💪', size: { kit: '1/13' } },
    { text: 'Intergalactic redesign 🎨', size: { ui: '1/5', kit: '5/13' } },
    { text: 'MediaModal', size: { ui: '1/3', kit: '1/5' } },
    { text: 'Filter Search', size: { ui: '1/3' } },
    { text: 'Advanced filters', size: { ui: '1/3' } },
    { text: 'Chart library research', size: { kit: '1/7' } },
    { text: 'PanelSummary', size: { ui: '1/7' } },
    { text: 'New brand styles implementation research', size: { ui: '3/13' } },
    { text: 'Other filter guides', size: { ui: '3/13' } },
    { text: 'New chart library', size: { kit: '7/13' } },
    { text: 'DataTable checkboxes functionality', size: { ui: '9/11', kit: '11/13' } },
    { text: 'WYSIWYG', size: { ui: '11/13' } },
  ],
  'Q1 2021': [
    { text: 'Wake up sprint ⏰', size: { kit: '1/3' } },
    { text: 'Mobile first guides', size: { ui: '3/9' } },
    { text: 'Mobile first components', size: { kit: '3/11' } },
    { text: 'D3 Charts: Line, Bar', size: { kit: '3/7' } },
    { text: 'GlobalNotice', size: { ui: '7/11', kit: '9/13' } },
    { text: 'Slider', size: { ui: '9/13', kit: '11/13' } },
    { text: 'Themes enchancement', size: { kit: '7/13' } },
    { text: 'D3 Charts: Donut', size: { kit: '9/13' } },
    { text: 'D3 Charts: Area', size: { kit: '11/13' } },
  ],
  'Q2 2021': [
    { text: 'Slider', size: { kit: '1/3' } },
    { text: 'D3 Charts: Donut', size: { kit: '1/5' } },
    { text: 'InputNumber improvements', size: { kit: '5/7' } },
    { text: 'PanelSummary', size: { ui: '5/9', kit: '11/15' } },
    { text: 'D3 Charts: Venn', size: { kit: '7/11' } },
    { text: 'Filter examples', size: { kit: '9/13' } },
    { text: 'D3 Charts: ScatterPlot', size: { kit: '11/15' } },
    { text: 'Themes & styles enchancement', size: { kit: '1/9' } },
  ],
};

function Gant(props) {
  const { sprint = [], components = [] } = props;
  const lengthSprint = sprint.length - 1;

  return (
    <div className="gantt">
      <div className={`gantt__row gantt__row--months gantt__row--months_${lengthSprint}`}>
        {sprint.map((date, index) => {
          if (index === lengthSprint) return null;
          return (
            <span key={date}>{`${date.format('D MMM')} - ${sprint[index + 1]
              .subtract(1, 'day')
              .format('D MMM')}`}</span>
          );
        })}
      </div>
      <div className={`gantt__row gantt__row--lines gantt__row--lines_${lengthSprint}`}>
        {sprint.map((date, index) => {
          const currentDate = dayjs();
          if (index === lengthSprint) return null;
          if (date < currentDate && sprint[index + 1].subtract(1, 'day') > currentDate) {
            return <span className="marker" key={date} />;
          }
          return <span key={date} />;
        })}
      </div>

      {components.map((component = {}, index) => (
        <ul className={`gantt__row-bars gantt__row-bars_${lengthSprint * 2}`} key={index}>
          {Object.keys(component.size).map((team, index) => (
            <li
              key={index}
              style={{
                gridColumn: component.size[team],
              }}
              className={`gantt__row-bars__${team}`}
              title={component.text}
            >
              {component.name && <LinkComponent to={`/components/${component.name}`} />}
              {component.text}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

function Roadmap() {
  const [value, setValue] = useState(5);
  let TabContent = null;

  switch (value) {
    case 0:
      TabContent = <Gant sprint={dateSprint.slice(0, 7)} components={components['Q1 2020']} />;
      break;
    case 1:
      TabContent = <Gant sprint={dateSprint.slice(6, 14)} components={components['Q2 2020']} />;
      break;
    case 2:
      TabContent = <Gant sprint={dateSprint.slice(13, 21)} components={components['Q3 2020']} />;
      break;
    case 3:
      TabContent = <Gant sprint={dateSprint.slice(20, 27)} components={components['Q4 2020']} />;
      break;
    case 4:
      TabContent = <Gant sprint={dateSprint.slice(26, 33)} components={components['Q1 2021']} />;
      break;
    case 5:
      TabContent = <Gant sprint={dateSprint.slice(32, 39)} components={components['Q2 2021']} />;
      break;
  }
  return (
    <>
      <Tabs value={value} onChange={(v) => setValue(v)} mb={5} styles={styles}>
        {Object.keys(components).map((nameQ, i) => (
          <Tabs.Item key={nameQ} value={i}>
            {nameQ}
          </Tabs.Item>
        ))}
      </Tabs>
      <Legenda>
        <li>
          <Oval />
          UX/UI
        </li>
        <li>
          <Oval />
          Development
        </li>
      </Legenda>
      {TabContent}
    </>
  );
}

export default Roadmap;
