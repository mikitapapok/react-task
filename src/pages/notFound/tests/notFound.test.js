import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NotFound from '../notFound';

configure({ adapter: new Adapter() });

describe('notFOund page tests', () => {
    it(' NotFound contain img tag ', () => {
        const component = shallow(<NotFound />);
        const wrapper = component.find("[data-id='1']");
        expect(wrapper.length).toBe(1);
    });
});
