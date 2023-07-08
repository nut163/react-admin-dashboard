import React, { useState, useEffect } from 'react';
import WidgetContainer from './WidgetContainer';
import { WidgetType } from '../types/widgetType';
import { getWidgets } from '../utils/widgetUtils';
import 'tailwindcss/tailwind.css';

const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useState<WidgetType[]>([]);

  useEffect(() => {
    const loadWidgets = async () => {
      const widgetData = await getWidgets();
      setWidgets(widgetData);
    };

    loadWidgets();
  }, []);

  return (
    <div className="dashboard">
      {widgets.map((widget, index) => (
        <WidgetContainer key={index} widget={widget} />
      ))}
    </div>
  );
};

export default Dashboard;