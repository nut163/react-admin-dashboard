import React, { useState } from 'react';
import { WidgetType } from '../types/WidgetType';
import Widget from './Widget';
import { Rnd } from 'react-rnd';

interface WidgetContainerProps {
  widgets: WidgetType[];
  onWidgetResize: (id: string, width: string, height: string) => void;
  onWidgetMove: (id: string, x: string, y: string) => void;
}

const WidgetContainer: React.FC<WidgetContainerProps> = ({ widgets, onWidgetResize, onWidgetMove }) => {
  const [activeWidget, setActiveWidget] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap">
      {widgets.map((widget) => (
        <Rnd
          key={widget.id}
          size={{ width: widget.width, height: widget.height }}
          position={{ x: widget.x, y: widget.y }}
          onDragStop={(e, d) => {
            onWidgetMove(widget.id, d.x, d.y);
          }}
          onResizeStop={(e, direction, ref) => {
            onWidgetResize(widget.id, ref.style.width, ref.style.height);
          }}
          onClick={() => setActiveWidget(widget.id)}
          className={`widget ${activeWidget === widget.id ? 'active' : ''}`}
        >
          <Widget widget={widget} />
        </Rnd>
      ))}
    </div>
  );
};

export default WidgetContainer;