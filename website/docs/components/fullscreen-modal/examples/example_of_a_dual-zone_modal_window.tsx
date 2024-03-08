import React from 'react';
import FullscreenModal from 'intergalactic/fullscreen-modal';
import { Text } from 'intergalactic/typography';
import Button from 'intergalactic/button';
import Divider from 'intergalactic/divider';
import ArrowLeftM from 'intergalactic/icon/ArrowLeft/m';
import ArrowRightM from 'intergalactic/icon/ArrowRight/m';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>Open fullscreen window</Button>
      <FullscreenModal visible={visible} onClose={() => setVisible(false)}>
        <FullscreenModal.Close />
        <FullscreenModal.Back>Go to Tool Name</FullscreenModal.Back>
        <FullscreenModal.Header>
          <FullscreenModal.Title>Modal Window Title</FullscreenModal.Title>
          <FullscreenModal.Description>Additional information</FullscreenModal.Description>
        </FullscreenModal.Header>
        <FullscreenModal.Body>
          <FullscreenModal.Section>
            <Text size={400}>Content Title</Text>
          </FullscreenModal.Section>
          <FullscreenModal.Section style={{ background: '#eee', overflow: 'auto' }}>
            <div style={{ height: '1000px' }}>
              <Text size={400}>Content Title</Text>
            </div>
          </FullscreenModal.Section>
        </FullscreenModal.Body>
        <FullscreenModal.Footer justifyContent='center' alignItems='center'>
          <Button size='m' theme='muted' use='tertiary'>
            <Button.Addon>
              <ArrowLeftM />
            </Button.Addon>
            <Button.Text ml={2}>Previous content</Button.Text>
          </Button>
          <Divider orientation='vertical' h={26} mx={6} />
          <Button size='m' theme='muted' use='tertiary'>
            <Button.Text mr={2}>Next content</Button.Text>
            <Button.Addon>
              <ArrowRightM />
            </Button.Addon>
          </Button>
        </FullscreenModal.Footer>
      </FullscreenModal>
    </>
  );
};

export default Demo;
