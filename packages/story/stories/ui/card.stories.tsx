import { Resource  } from "../../../ui/src/card";
import { UserIcon } from "../../../ui/src/icons/UserIcon";

export default {
  title: "UI/Card",
  component: Resource,
  argTypes: {
    href: { control: "text" },
    name: { control: "text" },
    description: { control: "text" },
    // icon: { control: "text" }, // You can adjust the control type based on the prop type
    pattern: { control: "object" }, // Assuming pattern is an object
  },
};

export function CardComponent(args) {
  return (
    <Resource
      {...args}
      //   description={args.description}
      //   href={args.href}
      //   icon={args.icon}
      //   name={args.name}
      //   pattern={args.pattern}
    />
  );
}

CardComponent.args = {
  href: "/contacts",
  name: "Contacts",
  description:
    "Learn about the contact model and how to create, retrieve, update, delete, and list contacts.",
  icon: UserIcon,
  pattern: {
    y: 16,
    squares: [
      [0, 1],
      [1, 3],
    ],
  },
};
