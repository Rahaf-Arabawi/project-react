import { useState, useEffect } from "react";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClintPage = () => {
  const [clints, setClints] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [clintToDelete, setClintToDelete] = useState(null);
  const [editedClint, setEditedClint] = useState({
    id: "",
    name: "",
    gender: "",
    email: "",
    mobileNumber: "",
    image: "",
  });

  useEffect(() => {
    const storedClints = JSON.parse(localStorage.getItem("clintsData")) || [];
    setClints(storedClints);
  }, []);

  const updateLocalStorage = (data) => {
    setClints(data);
    localStorage.setItem("clintsData", JSON.stringify(data));
  };

  const handleDelete = (id) => {
    const updatedClints = clints.filter((clint) => clint.id !== id);
    updateLocalStorage(updatedClints);
    setShowDeleteModal(false);
  };

  const handleShowDeleteModal = (clintId) => {
    setClintToDelete(clintId);
    setShowDeleteModal(true);
  };

  const handleShowEditModal = (clint) => {
    setEditedClint(clint);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedClint((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    const updatedClints = clints.map((clint) =>
      clint.id === editedClint.id ? editedClint : clint
    );
    updateLocalStorage(updatedClints);
    setShowEditModal(false);

    toast.success("Student updated successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const filteredClints = clints.filter(
    (clint) =>
      clint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      clint.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="table-clint m-3 p-3 bg-body rounded-3">
      <div className="d-flex justify-content-between mb-3">
        <Form className="d-flex" style={{ width: "300px" }}>
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              style={{ width: "50px", height: "33.5px" }}
              variant="outline-secondary"
            >
              <FaSearch />
            </Button>
          </InputGroup>
        </Form>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              <BsFillPersonBadgeFill className="text-success mx-1 fs-3" />{" "}
              Student
            </th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredClints.length === 0 ? (
            <tr>
              <td colSpan="5">No students found</td>
            </tr>
          ) : (
            filteredClints.map((clint) => (
              <tr key={clint.id}>
                <td>
                  <img
                    src={clint.image || "default-avatar.png"}
                    alt="Student"
                    className="rounded-circle me-2"
                    width="40"
                  />
                  {clint.name}
                </td>
                <td>{clint.gender}</td>
                <td>{clint.email}</td>
                <td>{clint.mobileNumber || "N/A"}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm mx-1"
                    onClick={() => handleShowEditModal(clint)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => handleShowDeleteModal(clint.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this student?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(clintToDelete)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editedClint.name}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editedClint.email}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="mobileNumber"
                value={editedClint.mobileNumber}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={editedClint.gender}
                onChange={handleEditChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ClintPage;
