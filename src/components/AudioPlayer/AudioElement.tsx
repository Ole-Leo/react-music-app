import { forwardRef } from 'react';

type AudioElementProps = {
  src: string;
  mute?: boolean;
  repeat?: boolean;
  onTrackEnd?: VoidFunction;
};

export const AudioElement = forwardRef<HTMLAudioElement, AudioElementProps>(
  ({ src, mute, repeat, onTrackEnd }, ref) => {
    return (
      <audio
        src={src}
        ref={ref}
        muted={mute}
        loop={repeat}
        onEnded={onTrackEnd}
      />
    );
  }
);
