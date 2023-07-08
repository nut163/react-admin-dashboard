import { WidgetType } from '../types/widgetType';

export const addWidget = (widget: WidgetType, widgets: WidgetType[]): WidgetType[] => {
  return [...widgets, widget];
}

export const removeWidget = (widgetId: string, widgets: WidgetType[]): WidgetType[] => {
  return widgets.filter(widget => widget.id !== widgetId);
}

export const moveWidget = (widgetId: string, newPosition: number, widgets: WidgetType[]): WidgetType[] => {
  const widgetIndex = widgets.findIndex(widget => widget.id === widgetId);
  if (widgetIndex === -1) return widgets;

  const widget = widgets[widgetIndex];
  const updatedWidgets = widgets.filter(widget => widget.id !== widgetId);
  updatedWidgets.splice(newPosition, 0, widget);

  return updatedWidgets;
}

export const resizeWidget = (widgetId: string, newSize: string, widgets: WidgetType[]): WidgetType[] => {
  return widgets.map(widget => {
    if (widget.id === widgetId) {
      return { ...widget, size: newSize };
    }
    return widget;
  });
}