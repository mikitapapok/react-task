import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';

import { store } from '../../../redux/store';
import NoteListItem from '../noteListItem';

configure({ adapter: new Adapter() });

const props = {
    getItemInfo: jest.fn(),
    id: '1',
    title: 'a',
    description: 'a',
    date: '2020',
    showId: true,
    openModal: jest.fn(),
    changePickedItem: jest.fn(),
    condition: true,
};
const noProps = {};

describe('NoteListItem component test', () => {
    const component = mount(
        <Provider store={store}>
            <NoteListItem {...props} />
        </Provider>
    );
    const wrapper = component.find("[data-container='1']");

    it('render component with props', () => {
        expect(wrapper).toHaveLength(2);
    });

    it('run function on click event in component', () => {
        const operationOnEvent = props.getItemInfo;
        wrapper.at(0).simulate('click');
        expect(operationOnEvent).toHaveBeenCalled();
    });
    it('run function on doubleclick event in component', () => {
        const doubleClickFunction = props.changePickedItem;
        wrapper.at(0).simulate('doubleClick');
        expect(doubleClickFunction).toHaveBeenCalled();
    });
});
