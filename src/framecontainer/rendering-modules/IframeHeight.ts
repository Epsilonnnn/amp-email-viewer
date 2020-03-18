import { FrameContainer } from '../FrameContainer';
import { Messaging } from '@ampproject/viewer-messaging';

/**
 * Reacts to changes to the AMP document's height and resizes the iframe to
 * adjust to them.
 */
class IframeHeightImpl {
  private iframe: HTMLIFrameElement;
  private messaging: Messaging;
  private onHeightChange: ((height: string) => void) | undefined;

  constructor(frameContainer: FrameContainer) {
    this.iframe = frameContainer.getIframe();
    this.messaging = frameContainer.getMessaging();
    this.onHeightChange = frameContainer.getConfig().onHeightChange;
  }

  start(): void {
    this.messaging.registerHandler(
      'documentHeight',
      this.documentHeightHandler
    );
  }

  private documentHeightHandler = (
    name: string,
    data: { height: number },
    rsvp: boolean
  ): Promise<void> => {
    const height = String(data.height);

    this.iframe.setAttribute('height', height);

    return Promise.resolve().then(() => {
      if (this.onHeightChange) {
        this.onHeightChange(height);
      }
    });
  };

  documentLoaded(): void {}
  documentUnloaded(): void {}
}

function load(frameContainer: FrameContainer) {
  const impl = new IframeHeightImpl(frameContainer);
  impl.start();
  return impl;
}

export const module = {
  name: 'IframeHeight',
  load,
};
