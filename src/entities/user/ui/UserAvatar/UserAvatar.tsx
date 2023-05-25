import * as React from "react";

import { Avatar } from "@/widgets";

import { Button, Icon } from "@shared/ui";

const SRC =
	"https://media.istockphoto.com/id/1319763415/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D1%84%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%BC%D0%B8%D0%B4-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B0.jpg?s=612x612&w=0&k=20&c=XoMPQ5PoeLjKn6XalSZ8A9_ZX0dwXrzXYnNSSZ4OpU0=";

export const UserAvatar: React.FC = () => (
	<Button onClick={() => {}} isTransparent>
		{SRC ? (
			<Avatar src={SRC} alt="name" />
		) : (
			<Icon icon="user" width={40} />
		)}
	</Button>
);
