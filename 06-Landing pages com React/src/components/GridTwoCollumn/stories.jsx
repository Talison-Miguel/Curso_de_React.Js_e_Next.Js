import { GridTwoCollumn } from '.';
import mock from './mock';

export default {
    title: 'GridTwoCollumn',
    component: GridTwoCollumn,
    args: mock,
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <GridTwoCollumn {...args} />
        </div>
    );
};
