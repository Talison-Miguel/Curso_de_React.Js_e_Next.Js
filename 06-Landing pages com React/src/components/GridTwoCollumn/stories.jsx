import { GridTwoCollumn } from '.';

export default {
    title: 'GridTwoCollumn',
    component: GridTwoCollumn,
    args: {
        children: 'GridTwoCollumn',
    },
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
