import React from 'react';

import {
	Show,
	SimpleShowLayout,
	TextField,
	Create,
	List,
	SimpleForm,
	TextInput
} from 'react-admin';

export const GreetingShow = (props) => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField source="greeting"/>
		</SimpleShowLayout>
	</Show>
);

export const GreetingCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="greeting" />
        </SimpleForm>
    </Create>
);

export const GreetingList = (props) => (
	<List {...props}>
	</List>
);

export default Create;