import React, { useState } from 'react';
import WidgetContainer from './WidgetContainer';
import WidgetType from '../types/WidgetType';
import 'src/styles/tailwind.css';

const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useState<WidgetType[]>([]);

  const addWidget = (widget: WidgetType) => {
    setWidgets([...widgets, widget]);
  };

  const removeWidget = (id: string) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };

  return (
    <div className="dashboard">
      <button onClick={() => addWidget({ id: 'new', x: 0, y: 0, width: 1, height: 1 })}>
        Add Widget
      </button>
      <div className="widgets">
        {widgets.map(widget => (
          <WidgetContainer key={widget.id} widget={widget} removeWidget={removeWidget} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;