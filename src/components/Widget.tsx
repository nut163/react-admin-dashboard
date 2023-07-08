import React from 'react';
import { WidgetType } from '../types/widgetType';
import { widgetUtils } from '../utils/widgetUtils';
import 'src/styles/tailwind.css';

interface WidgetProps {
  widget: WidgetType;
  onMove: (widget: WidgetType, direction: string) => void;
  onResize: (widget: WidgetType, direction: string) => void;
}

const Widget: React.FC<WidgetProps> = ({ widget, onMove, onResize }) => {
  return (
    <div className="widget-container">
      <div className="widget-header">
        <h2>{widget.title}</h2>
        <div className="widget-controls">
          <button onClick={() => onMove(widget, 'left')}>Move Left</button>
          <button onClick={() => onMove(widget, 'right')}>Move Right</button>
          <button onClick={() => onResize(widget, 'expand')}>Expand</button>
          <button onClick={() => onResize(widget, 'shrink')}>Shrink</button>
        </div>
      </div>
      <div className="widget-content">
        {widgetUtils.renderWidgetContent(widget)}
      </div>
    </div>
  );
};

export default Widget;