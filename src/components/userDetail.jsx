import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetail = () => {
  const { id } = useParams();

  const [userDetails, setUserDetails] = useState({});

  const getDetails = async () => {
    try {
      const res = await axios.get(`https://randomuser.me/api/?id=${id}`);
      setUserDetails(res.data.results[0]);
    } catch (e) {
      console.log('User Detail Api Error ==>> ', e);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-12 mb-4 mb-lg-0 p-2">
            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="row g-0">
                <div className="col-md-12">
                  <div className="card-body p-4">
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-4 mb-3">
                        <h3>Title</h3>
                        <p className="text-muted">{userDetails?.name?.title}</p>
                      </div>
                      <div className="col-4 mb-3">
                        <h3>First Name</h3>
                        <p className="text-muted">{userDetails?.name?.first}</p>
                      </div>
                      <div className="col-4 mb-3">
                        <h3>Last Name</h3>
                        <p className="text-muted">{userDetails?.name?.last}</p>
                      </div>
                      <div className="col-4 mb-3">
                        <h3>Gender</h3>
                        <p className="text-muted">{userDetails?.gender}</p>
                      </div>
                      <div className="col-4 mb-3">
                        <h3>Phone Number</h3>
                        <p className="text-muted">{userDetails?.phone}</p>
                      </div>
                      <div className="col-4 mb-3">
                        <h3>Cell Number</h3>
                        <p className="text-muted">{userDetails?.cell}</p>
                      </div>
                      <div className="col-4 mb-3">
                        <h3>Date of Birth</h3>
                        <p className="text-muted">{userDetails?.dob?.date}</p>
                      </div>
                      <div className="col-4 mb-3">
                        <h3>Country</h3>
                        <p className="text-muted">
                          {userDetails?.location?.country}
                        </p>
                      </div>
                      <div className="col-4 mb-3">
                        <h3>Address</h3>
                        <p className="text-muted">{`${userDetails?.location?.street?.number} , ${userDetails?.location?.street?.name}`}</p>
                      </div>
                    </div>
                    <hr className="mt-0 mb-4 d-flex justify-content-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetail;
