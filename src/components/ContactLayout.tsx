import { RootState } from "@/redux/store";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";

const ContactLayout = () => {
  const contactsData = useSelector(
    (state: RootState) => state.contacts.contacts
  );

  // console.log(contactsData);

  const [searchedValue, setSearchedValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(e.target.value);
  };

  const searchedContacts = contactsData?.filter((contact) => {
    return contact.firstname
      .toLowerCase()
      .includes(searchedValue.toLowerCase());
  });

  return (
    <div className="flex w-full h-[100vh]">
      <div className="w-2/5 px-2 py-16 bg-white md:px-2 xl:px-4 md:w-4/12 lg:w-1/5 dark:bg-card">
        <div className="mb-8">
          <input
            placeholder="Search Contacts ..."
            className="w-full px-4 py-4 text-sm font-normal border-2 rounded-lg border-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-accent dark:text-white"
            onChange={handleSearch}
          />
        </div>

        <div>
          <Link
            to="add-contact"
            className="flex items-center gap-2 px-1 py-4 cursor-pointer lg:gap-3 md:px-2 xl:px-4 bg-accent rounded-xl hover:bg-muted"
          >
            <Plus className="h-6 text-primary" />
            <p className="text-sm md:text-base">Add New Contact</p>
          </Link>

          <div className="max-h-screen mt-4 overflow-auto no-scrollbar">
            {
              // Loop through contactsData and display each contact
              searchedContacts?.map((contact) => (
                <NavLink
                  to={`/contact/${contact?.id}`}
                  key={contact?.id}
                  className="block"
                >
                  <div className="flex items-center gap-2 py-4 mb-2 cursor-pointer md:px-2 xl:px-4 md:gap-2 xl:gap-4 bg-card rounded-xl hover:bg-muted">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
                      <p className="text-2xl font-semibold text-center text-white">
                        {contact?.firstname.charAt(0)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold md:text-base text-primary">
                        {contact?.firstname} {contact?.lastname}
                      </p>
                      {/* <p className="text-sm text-primary">{contact.phone}</p> */}
                    </div>
                  </div>
                </NavLink>
              ))
            }
          </div>
        </div>
      </div>
      <div className="w-3/5 md:w-8/12 lg:w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default ContactLayout;
