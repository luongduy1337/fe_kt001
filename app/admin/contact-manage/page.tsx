import { ContactRes } from "@/interfaces";

async function getAllContacts(){
    const res = await fetch('http://localhost:8788/contact');
    if(!res.ok){
        throw new Error("Could not get all contacts");
    }
    return res.json();
}


export default async function ContactManagement() {
    const contactList : ContactRes[] = await getAllContacts();
    const renderContact = () => {
        return contactList.map(contact => {
            return (
                <div key={contact.id}>
                    <h1>{contact.title}</h1>
                </div>
            )
        })
    }

  return (
    <div>
        {renderContact()}
    </div>
  )
}
