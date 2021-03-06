import React from 'react';
import { List, Edit, Create, EditButton, Filter,
	DisabledInput, LongTextInput, ReferenceInput, SelectInput, TextInput,
	SimpleForm, Datagrid, TextField, Responsive, SimpleList,
	ReferenceField } from 'react-admin';


export const PostList = (props) => (
	<List {...props} filters={<PostFilter />}>
		<Responsive
			small={
				<SimpleList primaryText={record => record.title}
					secondaryText={record => `${record.views} views`}
					tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
				/>
			}
			medium = {
				<Datagrid>
					<TextField source="id" />
					<ReferenceField label="User" source="userId" reference="users">
						<TextField source="name" />
					</ReferenceField>
					<TextField source="title" />
					<TextField source="body" />
					<EditButton />
				</Datagrid>
			}
		/>
	</List>
);


const PostFilter = (props) => (
	<Filter {...props}>
		<TextInput label="Search" source="q" alwaysOn />
		<ReferenceInput label="User" source="userId" reference="users" allowEmpty>
			<SelectInput optionText="name" />
		</ReferenceInput>
	</Filter>
);

const PostTitle = ({ record }) => {
	return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
	<Edit title={<PostTitle />} {...props}>
		<SimpleForm>
			<DisabledInput source="id" />
			<ReferenceInput label="User" source="userId" reference="users">
				<SelectInput optionText="name" />
			</ReferenceInput>
			<TextInput source="title" />
			<LongTextInput source="body" />
		</SimpleForm>
	</Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);