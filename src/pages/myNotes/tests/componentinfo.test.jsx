import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ComponentInfo from '../componentInfo';

configure({ adapter: new Adapter() });

const props = {
    componentInfo: {
        id: '2',
        title: 'a',
        description: 'a',
        date: '2020',
    },
    openModal: () => {},
};

describe('ComponentInfo component test', () => {
    it('component has props', () => {
        const component = shallow(
            <ComponentInfo componentInfo={props.componentInfo} openModal={props.openModal} />
        );
        const componentProp = component.find("[data-component='1']");

        expect(componentProp).toHaveLength(1);
    });

    it('render component without props', () => {
        const component = shallow(<ComponentInfo componentInfo={{}} openModal={() => {}} />);

        const title = component.find('h1');

        expect(title).toHaveLength(1);
    });
});
