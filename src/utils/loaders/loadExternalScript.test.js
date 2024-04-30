import loadExternalScript from './loadExternalScript';

// Mock the dotenv module
jest.mock('dotenv', () => ({
  config: jest.fn(),
}));

// Set up environment variables before running tests
beforeAll(() => {
  process.env.API_KEY = 'mockApiKey';
});

// Describe the test suite for loadExternalScript function
describe('loadExternalScript', () => {
  let mockWindow;
  let mockDocument;
  let scriptElement;
  let insertedScriptSrc;

  beforeEach(() => {
    // Mock window and document objects
    mockWindow = {};
    scriptElement = document.createElement('script');
    const parentNode = document.createElement('div'); // Create a dummy parent node
    parentNode.insertBefore = jest.fn((insertedNode, existingNode) => {
      insertedScriptSrc = insertedNode.src;
    });
    mockDocument = {
      createElement: jest.fn(() => scriptElement),
      getElementsByTagName: jest.fn(() => [scriptElement]),
      parentNode: parentNode,
    };
  });
  

  // Test case for setting up widget function on window object
  it('sets up widget function on window object if not already present', () => {
    loadExternalScript(mockWindow, mockDocument, 'script', '_aqiFeed');
    expect(mockWindow['_aqiFeed']).toBeDefined();
  });

  // Test case for creating and inserting script element with correct parameters
  it('creates and inserts script element with correct parameters', () => {
    // Call the loadExternalScript function with mock arguments
    loadExternalScript(mockWindow, mockDocument, 'script', '_aqiFeed');

    // Call the widget function on window object with mock data
    mockWindow['_aqiFeed']([{ city: 'London', lang: 'en' }], process.env.API_KEY);

    // Assertions to check if the script element is created and inserted correctly
    expect(scriptElement.src).toContain('London');
    expect(scriptElement.src).toContain('en');
    expect(scriptElement.src).toContain(process.env.API_KEY);
    expect(scriptElement.async).toBe(1);
    expect(mockDocument.getElementsByTagName).toHaveBeenCalledWith('script');
    expect(mockDocument.parentNode.insertBefore).toHaveBeenCalled();
    expect(insertedScriptSrc).toBe(scriptElement.src);
  });
});
