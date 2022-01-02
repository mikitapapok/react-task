import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

import Notes from '../notes';

configure({ adapter: new Adapter() });

describe('Notes component test', () => {
    const renderComponent = (props) =>
        mount(
            <Provider store={store}>
                <Notes condition={props} />
            </Provider>
        );

    it('component is rendered with falsly prop', () => {
        const component = renderComponent(false);
        const newTodoFormItem = component.find("[data-description='1']");
        const wrapper = newTodoFormItem.find('span');
        expect(wrapper.text()).toBe('Enter title');
    });


});
