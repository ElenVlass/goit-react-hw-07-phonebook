import { connect } from "react-redux";
import * as operations from "../../redux/phoneBook-operations";
import ContactList from "./ContactList";

const specifyContacts = (allContacts, filter) => {
  const normalizedContactSnippet = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedContactSnippet)
  );
};

const mapStateToProps = (state) => {
  const { contacts, filter, loading } = state.phoneBook;

  return {
    list: specifyContacts(contacts, filter),
    isLoading: loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(operations.deleteContact(id)),
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
