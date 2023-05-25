import React from "react";

import { LoginForm } from "@entities/login";
import { Layout } from "@shared/ui";

export default function Login() {
	return (
		<Layout isSmall>
			<LoginForm />
		</Layout>
	);
}
