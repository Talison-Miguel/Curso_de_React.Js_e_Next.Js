import { SectionContainer } from '.';

export default {
    title: 'SectionContainer',
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1>SectionContainer</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consequuntur hic dolor voluptate quo
                    sapiente architecto, tempora nulla aut repellendus. Deserunt optio doloremque error porro expedita
                    sunt quaerat sit accusantium?
                </p>
            </div>
        ),
    },
    argTypes: {
        children: { type: '' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <SectionContainer {...args} />
        </div>
    );
};
