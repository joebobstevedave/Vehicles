import { VehiclesPage } from './app.po';

describe('vehicles App', () => {
  let page: VehiclesPage;

  beforeEach(() => {
    page = new VehiclesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
