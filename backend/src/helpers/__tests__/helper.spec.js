import createResponse, { createObjectItems, createObjectItem } from '../index';
import response from './mock/response.json';
import resultcreateResponse from './mock/resultcreateResponse.json';
import resultcreateObjectItem from './mock/resultcreateObjectItem.json';
import responseItem from './mock/responseItem.json';
import description from './mock/description.json';

describe('API Request TEST:', () => {
  it('passes createObjectItems', async () => {
    const items = response.results[0];
    const objectRes = createObjectItems(items);
    expect(objectRes).toEqual(resultcreateResponse.items[0]);
  });

  it('passes createObjectItem', async () => {
    const itemResponse = responseItem;
    const item = createObjectItem({
      ...itemResponse,
      description: description.plain_text,
    });
    expect(item).toEqual(resultcreateObjectItem);
  });
  it('passes createResponse', async () => {
    const categories = response.filters.find((filter) => filter.id === 'category');
    const items = response.results.map((item) => createObjectItems(item));
    const objectRes = createResponse({ data: items, categories });
    expect(objectRes).toEqual(resultcreateResponse);
  });
});
