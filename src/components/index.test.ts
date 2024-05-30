import * as Components from './index';

describe('Component Exports', () => {
  it('should export App component', () => {
    expect(Components.App).toBeDefined();
    expect(typeof Components.App).toBe('function');
  });

  it('should export Footer component', () => {
    expect(Components.Footer).toBeDefined();
    expect(typeof Components.Footer).toBe('function');
  });

  it('should export Maps component', () => {
    expect(Components.Maps).toBeDefined();
    expect(typeof Components.Maps).toBe('function');
  });

  it('should export ModalAqi component', () => {
    expect(Components.ModalAqi).toBeDefined();
    expect(typeof Components.ModalAqi).toBe('function');
  });

  it('should export Navbar component', () => {
    expect(Components.Navbar).toBeDefined();
    expect(typeof Components.Navbar).toBe('function');
  });

  it('should export PageAbout component', () => {
    expect(Components.PageAbout).toBeDefined();
    expect(typeof Components.PageAbout).toBe('function');
  });

  it('should export PageForecast component', () => {
    expect(Components.PageForecast).toBeDefined();
    expect(typeof Components.PageForecast).toBe('function');
  });

  it('should export PageRealTime component', () => {
    expect(Components.PageRealTime).toBeDefined();
    expect(typeof Components.PageRealTime).toBe('function');
  });

  it('should export PageResources component', () => {
    expect(Components.PageResources).toBeDefined();
    expect(typeof Components.PageResources).toBe('function');
  });

  it('should export SearchBar component', () => {
    expect(Components.SearchBar).toBeDefined();
    expect(typeof Components.SearchBar).toBe('function');
  });

  it('should export Widget component', () => {
    expect(Components.Widget).toBeDefined();
    expect(typeof Components.Widget).toBe('function');
  });
});
