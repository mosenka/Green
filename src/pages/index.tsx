import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { ChatList } from "@entities/chatsList";
import { AddContactForm } from "@entities/contact";
import { useGetLoginFromLocalStorage } from "@entities/login";

import { UserAvatar } from "@entities/user";
import { UserActionGroup } from "@features/userActionGroup";

import { Header, Layout } from "@shared/ui";
import { Chat } from "@widgets/index";

export default function Home() {
	const router = useRouter();

	const { isError } = useGetLoginFromLocalStorage();

	useEffect(() => {
		if (!isError) return;

		router.push("/login");
	}, [isError, router]);

	return (
		<Layout>
			<Layout.Sidebar>
				<Header>
					<UserAvatar />
					<UserActionGroup />
				</Header>
				<AddContactForm />
				<ChatList />
			</Layout.Sidebar>
			<Layout.Content>
				<Chat />
			</Layout.Content>
		</Layout>
	);
}
