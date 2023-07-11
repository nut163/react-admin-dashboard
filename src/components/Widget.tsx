import React from 'react';
import { WidgetType } from '../types/WidgetType';
import 'src/styles/tailwind.css';

interface WidgetProps {
  widget: WidgetType;
  onResize: (widget: WidgetType, width: number, height: number) => void;
  onMove: (widget: WidgetType, x: number, y: number) => void;
}

const Widget: React.FC<WidgetProps> = ({ widget, onResize, onMove }) => {
  const handleResize = (event: React.MouseEvent) => {
    const width = event.currentTarget.clientWidth;
    const height = event.currentTarget.clientHeight;
    onResize(widget, width, height);
  };

  const handleMove = (event: React.MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    onMove(widget, x, y);
  };

  return (
    <div className="widget" style={{ width: widget.width, height: widget.height, left: widget.x, top: widget.y }} onMouseDown={handleMove} onResize={handleResize}>
      <div className="widget-content">
        {widget.content}
      </div>
    </div>
  );
};

export default Widget;