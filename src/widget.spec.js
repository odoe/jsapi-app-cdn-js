import { initWidgets } from './widgets';

jest.mock('esri/widgets/LayerList');
jest.mock('esri/widgets/Legend');

let spy;

describe('widgets', () => {
  beforeEach(() => {
    spy = jest.spyOn(document, 'getElementById');
    const mockElem = {
      offsetWidth: 300,
    };
    spy.mockReturnValue(mockElem);
  });

  it('initializes widgets in view', () => {
    const widgets = [];
    const view = {
      ui: {
        add(w) {
          widgets.push(w);
        },
      },
    };
    initWidgets(view);
    expect(widgets).toHaveLength(2);
  });
});
