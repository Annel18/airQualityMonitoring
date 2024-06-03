import { loadExternalScript } from './loadExternalScript'

beforeAll(() => {
  process.env.API_KEY = 'mockApiKey'
})

describe('loadExternalScript', () => {
  let mockWindow: any
  let mockDocument: any

  beforeEach(() => {
    // Create a parent node and attach it to the document
    const parentNode = document.createElement('div')
    document.body.appendChild(parentNode)

    // Mock the window object
    mockWindow = {}

    // Mock the document object
    mockDocument = {
      createElement: jest.fn(() => ({ src: '' })),
      getElementsByTagName: jest.fn(() => [{ src: '' }]),
      parentNode, // Assign the created parent node
    }
  })

  // Test case for setting up widget function on window object
  it('sets up widget function on window object if not already present', () => {
    // Define _aqiFeed property on mockWindow
    mockWindow['_aqiFeed'] = jest.fn()

    // Call the loadExternalScript function with mock arguments
    loadExternalScript(mockWindow, mockDocument, 'script', '_aqiFeed')

    // Assertions to check if the widget function is set up on the window object
    expect({}.hasOwnProperty.call(mockWindow, '_aqiFeed')).toBeTruthy()
  })

  // Test case for setting up widget function on window object if not present
  it('creates widget function on window object if not already present', () => {
    // Call the loadExternalScript function with mock arguments
    loadExternalScript(mockWindow, mockDocument, 'script', '_aqiFeed')

    // Assertions to check if the widget function is set up on the window object
    expect(mockWindow['_aqiFeed']).toBeDefined()
  })
})
