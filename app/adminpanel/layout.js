"use client";
import React, { use, useEffect, useState } from "react";
import "./sidebar.scss";
import doctor from "../../assets/doctor.jpg";
import Link from "next/link";

export default function AdminPanel({children}) {
  // const [upload, setUpload] = useState(false);

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    const setFullHeight = () => {
      const elements = document.querySelectorAll(".js-fullheight");
      elements.forEach((element) => {
        element.style.height = window.innerHeight + "px";
      });
    };

    const handleResize = () => {
      setFullHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    setFullHeight();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div>
       
      <div className="wrapper d-flex align-items-stretch">
        <nav
          id="sidebar"
          className={`order-last ${isSidebarActive ? "active" : ""}`}
          style={{ backgroundImage: "url(images/bg_1.jpg)" }}
        >
          {/* <div className="custom-menu">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-primary"
              onClick={toggleSidebar}
            ></button>
          </div> */}
          <div className="sidebar mt-4">
            <h1 className="">
              <a className="logo primary-sidebar">
                دكتور احمد جلال
                <span>استشارى اول أمراض الجهاز الهضمي -الكبدوالمناظير"</span>
              </a>
            </h1>
            <div className=" d-flex align-items-center justify-content-center mb-4">
              <img
                className="  rounded-circle w-75 shadow "
                height={190}
                src={doctor.src}
                alt="Doctor"
              />
            </div>

            <ul className="list-unstyled components mb-5">
                  <li>
                <Link prefetch href="/">
                  <span className="fa fa-sticky-note mr-3" /> الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link prefetch href="reservationstatus">
                  <span className="fa fa-sticky-note mr-3" /> طلبات الحجز
                </Link>
              </li>
              <li className="active">
                <Link prefetch href="timetable">
                  <span className="fa fa-home mr-3" /> مواعيد الحجز
                </Link>
              </li>
              <li>
                <Link prefetch href="blogs">
                  <span className="fa fa-user mr-3" /> أنشئ مدونة
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div
          id="content"
          className={`sidebar p-4 p-md-5 pt-5 ${
            isSidebarActive ? "active" : ""
          }`}
        >
             {children}
        </div>
      </div>
    </div>
  );
}
