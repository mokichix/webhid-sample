import { useEffect, useRef } from "react";
import { atom, useAtom, useSetAtom } from "jotai";
import HidDevice from './webhid/HidDevice';

export const QueueOpenAtom = atom(null);
export const QueueCloseAtom = atom(null);

export const OpenStateAtom = atom(false);


export default function DeviceManager() {
  const hid = useRef(null);

  const [queueOpen, setQueueOpen] = useAtom(QueueOpenAtom);
  const [queueClose, setQueueClose] = useAtom(QueueCloseAtom);

  const setOpenState = useSetAtom(OpenStateAtom);

  useEffect(() => {
    if (queueOpen) {
      const open = async () => {
        const opened = await hidOpen();
        setOpenState(opened);
        setQueueOpen(null);
      };
      open();
    }
  }, [queueOpen]);

  useEffect(() => {
    if (queueClose) {
      const close = async () => {
        await hidClose();
        setOpenState(false);
        setQueueClose(null);
      };
      close();
    }
  }, [queueClose]);

  const hidOpen = async () => {
    if (!hid.current) {
      const hidDevice = new HidDevice();
      await hidDevice.find();
      if (await hidDevice.open()) {
        hid.current = hidDevice;
      }
    } else {
      await hid.current.open();
    }
    return hid.current.isOpened();
  };

  const hidClose = () => {
    if (hid.current) {
      hid.current.close();
    }
  }

  return (<></>);
}
