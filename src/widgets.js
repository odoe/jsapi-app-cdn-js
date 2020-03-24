// Widgets
import LayerList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';

export function initWidgets(view) {
  const legend = new Legend({ view });
  const layerList = new LayerList({ view });

  view.ui.add(legend, 'bottom-left');
  view.ui.add(layerList, 'top-right');
  return view;
}
