import React from 'react';
import { NoticeBubbleContainer, NoticeBubbleManager } from 'intergalactic/notice-bubble';
import Button from 'intergalactic/button';
import ReloadM from 'intergalactic/icon/Reload/m';

const manager = new NoticeBubbleManager();

const Demo = () => {
  const handleClick = () => {
    manager.add({
      children: 'Data for 5 new profiles is ready. Please reload the page to view it.',
      action: (
        <Button theme='invert'>
          <Button.Addon>
            <ReloadM />
          </Button.Addon>
          <Button.Text>Reload the page</Button.Text>
        </Button>
      ),
      initialAnimation: true,
      duration: 3000,
    });
  };

  return (
    <>
      <Button onClick={handleClick}>Show notice with reload action</Button>
      <NoticeBubbleContainer manager={manager} />
    </>
  );
};

export default Demo;
