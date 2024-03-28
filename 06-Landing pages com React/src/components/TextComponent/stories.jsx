import { TextComponent } from '.';

export default {
    title: 'TextComponent',
    component: TextComponent,
    parameters: {
        args: {
            children: `
                children: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa laudantium reprehenderit eveniet,
                veritatis odio, exercitationem eaque error ex quis voluptatibus, consequatur id assumenda commodi nostrum consectetur! At, ullam quasi!
            `,
        },
    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    );
};
