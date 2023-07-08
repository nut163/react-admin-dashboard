import React, { useState } from 'react';
import { WidgetType } from '../types/widgetType';
import Widget from './Widget';
import { moveWidget, stretchWidget } from '../utils/widgetUtils';

interface WidgetContainerProps {
  widgets: WidgetType[];
}

const WidgetContainer: React.FC<WidgetContainerProps> = ({ widgets }) => {
  const [widgetList, setWidgetList] = useState<WidgetType[]>(widgets);

  const handleMove = (id: string, direction: string) => {
    const newWidgetList = moveWidget(widgetList, id, direction);
    setWidgetList(newWidgetList);
  };

  const handleStretch = (id: string, direction: string) => {
    const newWidgetList = stretchWidget(widgetList, id, direction);
    setWidgetList(newWidgetList);
  };

  return (
    <div className="widget-container">
      {widgetList.map((widget) => (
        <Widget
          key={widget.id}
          widget={widget}
          onMove={handleMove}
          onStretch={handleStretch}
        />
      ))}
    </div>
  );
};

export default WidgetContainer;