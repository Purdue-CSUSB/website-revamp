import { useState, useEffect, React } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './AddBlog.css';

import Button from '@mui/material/Button';

function AddBlog() {
  const classStanding = [{label: "Freshman", value: "Freshman"},
  {label: "Sophomore", value: "Sophomore"},
  {label: "Junior", value: "Junior"},
  {label: "Senior", value: "Senior"}, 
  {label: "Graduated", value: "Graduated"}]
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");


  const [selectedFile, setSelectedFile] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [format, setFormat] = useState("");
  const [category, setCategory] = useState("");

  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [standing, setStanding] = useState("");
  const [linkedIn, setLinkedIn] = useState("");


  const [members, setMembers] = useState([]);
  const [memberList, setMemberList] = useState({});
  const [initiativeName, setInitiativeName] = useState("")
  const [link, setLink] = useState("")
  const [initiativeMembers, setInitiativeMembers] = useState([]);
  const [linkDescription, setLinkDescription] = useState("")
  const [description, setDescription] = useState("")

  const [wikiTitle, setWikiTitle] = useState("");
  const [wikiAuthor, setWikiAuthor] = useState([]);
  const [wikiDate, setWikiDate] = useState("");
  const [wikiDescription, setWikiDescription] = useState("");
  const [wikiContent, setWikiContent] = useState("");
  const [wikiCategory, setWikiCategory] = useState("");

  useEffect(() => {
    axios.get('http://localhost:4000/members/')
    .then(res => {
      // console.log(res.data)
      setMembers(res.data)
      const temp = members.map(member => ({value: member, label: member.name}))
      setMemberList(temp)
    })
    .catch(err => console.error(err));   

}, [members]);

  const addBlog = () => {
    if (title === "" || author === "" || summary === "" || !selectedImage || !selectedFile) {
      alert("Enter all data");
      return;
    }
    console.log(selectedFile);
    console.log(format)
    const formData = new FormData();
    formData.append('files', selectedImage)
    formData.append('files', selectedFile)
    formData.append('name', title)
    formData.append('summary', summary)
    formData.append('author', author)
    formData.append('format', format)
   // formData.append('content', content)

    axios.post('http://localhost:4000/add-entry/', formData)
      .then((res) => (alert(res.data)))
      .catch((err) => (alert(err)));
    setTitle("");
    setAuthor("");
    setSummary("");
    setAuthor("");

  }
  const addMember = () => {
    if (name === "" || !profile || standing === "" || linkedIn === "") {
      alert("Enter all data");
      return;
    }
    const formData = new FormData();
    formData.append('file', profile)
    formData.append('name', name)
    formData.append('standing', standing.value)
    formData.append('linkedIn', linkedIn)

    axios.post("http://localhost:4000/add-member/", formData)
      .then((res) => (alert(res.data)))
      .catch((err) => alert(err));
  }
  const addInitiative = () => {
    const formData = new FormData();
    console.log(initiativeMembers)
    const memberTemp = initiativeMembers.map((member) => member.value)
    console.log(memberTemp)
    formData.append('name', initiativeName)
    formData.append('description', description)
    //formData.append('members', memberTemp)
    formData.append('link', link)
    formData.append('linkDescription', linkDescription)

    console.log(formData)

    axios.post("http://localhost:4000/add-initiative/", {name: initiativeName,
      description: description, members: memberTemp, link: link, linkDescription: linkDescription})
      .then((res) => (alert(res.data)))
      .catch((err) => alert(err));
  }

  const addWiki = () => {

    const memberTemp = wikiAuthor.map((member) => member.value)
    
    const formData = new FormData();
  
    console.log(memberTemp)
    formData.append("title", wikiTitle);
    formData.append("date", wikiDate);
    formData.append("description", wikiDescription);
    formData.append("content", wikiContent);
    formData.append("category", wikiCategory);
    
    console.log(formData);
     axios.post("http://localhost:4000/add_wiki/", {title: wikiTitle,
      author: memberTemp, date: wikiDate, description: wikiDescription, 
      content: wikiContent, category: wikiCategory})
      .then((res) => (alert(res.data)))
      .catch((err) => alert(err));
  }

  const uploadImage = (e) => {

		setSelectedImage(e.target.files[0]);
    return;

	};
  const uploadProfile = (e) => {
    setProfile(e.target.files[0]);
    return;
  }

  const uploadFile = (e) => {
    setSelectedFile(e.target.files[0]);
    return;
  }
  return (
    <div className="body">
       <div className="column1">
        <div>
          <h3>Add a Blog Entry</h3>
          <p>Title</p>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <p>Author</p>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <p>Enter a brief summary</p>
          <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} />
          <p>Upload image</p>
          <input type = "file" name="file" onChange={uploadImage} />
          <p>PDF or Markdown?</p>
          <select value={format} onChange={(e) => setFormat(e.target.value)} >
            <option value="PDF">PDF</option>
            <option value="Markdown">Markdown</option>
          </select>
          <p>Body</p>
          <input type = "file" name="file" onChange={uploadFile}/>
          <p>Add category</p>
          <input type = "text" value = {category} onChange = {(e) => setCategory(e.target.value)} />
          <br></br><br></br>
          <Button variant = "outlined" onClick={addBlog}>Add Blog</Button>
           <h4> Add Wiki </h4>
      
      <p> Wiki title</p>
      <input type = "text" value = {wikiTitle} onChange={(e) => setWikiTitle(e.target.value)} />
      <p> Author(s)</p>
      <p>Choose members</p>
        <Select
          isMulti
          value = {wikiAuthor}
          onChange = {selectedOptions => setWikiAuthor(selectedOptions)}
          name="members"
          options={memberList}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <p> Enter Date (mm/dd/yyyy)</p>
      <input type = "text" value = {wikiDate} onChange={(e) => setWikiDate(e.target.value)} />
      <p> Description</p>
      <input type = "text" value = {wikiDescription} onChange={(e) => setWikiDescription(e.target.value)} />
      <p> Content</p>
      <input type = "text" value = {wikiContent} onChange={(e) => setWikiContent(e.target.value)} />
      <p> Category</p>
      <input type = "text" value = {wikiCategory} onChange={(e) => setWikiCategory(e.target.value)} />
        <br></br><br></br>
        <Button variant = "outlined" onClick={addWiki}>Add wiki</Button>
        </div>
    </div>
    <div className='column2'>
      <div>
        <h3> Add Member</h3>
        <p>Name</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Add an image</p>
        <input type = "file" name="file" onChange={uploadProfile} />
        <p>Select class standing</p>
        <Select value = {standing}
          className="basic-single"
          classNamePrefix="select"
          options = {classStanding}
          isSearchable = {true}
          onChange={selectedOption => setStanding(selectedOption)} 
        >
        </Select>
        <p>Add LinkedIn</p>
        <input type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
        <br></br><br></br>
        <Button variant = "outlined" onClick={addMember}>Add member</Button>

      </div>
    </div>
    <div className='column3'>
      <h3> Add Initiative </h3>
        <p>Initiative Name</p>
        <input type="text" value={initiativeName} onChange={(e) => setInitiativeName(e.target.value)} />
        <p>Choose members</p>
        <Select
          isMulti
          value = {initiativeMembers}
          onChange = {selectedOptions => setInitiativeMembers(selectedOptions)}
          name="members"
          options={memberList}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <p>Description</p>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <p>Link</p>
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
        <p>Description for Link</p>
        <input type="text" value={linkDescription} onChange={(e) => setLinkDescription(e.target.value)} />
        <br></br><br></br>
        <Button variant = "outlined" onClick={addInitiative}>Add initiative</Button>
    </div>
    </div>
  );
}

export default AddBlog;