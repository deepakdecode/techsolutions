import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';

import createHistory from 'history/createBrowserHistory';

import PageFooter from './pages/Layout/PageFooter'
import PageHeader from './pages/Layout/PageHeader'


import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import ServiceDetail from './pages/Service/ServiceDetail';
import Training from './pages/Training/Training';
import Course from './pages/Course/Course';
import CourseDetail from './pages/Course/CourseDetail';
import Career from './pages/Career/Career';
import Resource from './pages/Resource/Resource';
import ContactUs from './pages/ContactUs/ContactUs';
import TrainingDetail from './pages/Training/TrainingDetail';


const courseMenu = [
  {
    id: "DotNet", courseGroup: "DotNet", path: "/Course/",
    courses:
      [
        { id: "ASPNetClassic", courseName: "ASP Net Classic", imagePath: "..\..\image\csharp.png", fee: 55000, duration: "3 Month", courseDesc: "This ASP .Net Training in Jaipur provides an exhaustive coverage of .NET framework and ASP.NET technology features like ASP.NET Architecture, State Management, Master pages, User & Custom Controls and Data Access, Authentication and Authorization, Navigation, Web Configuration, Health Monitoring, Instrumentation, Web Services, AJAX and Deployment.ASP.Net Training in Jaipur", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "Programming Fundamentals" }], content: [{ desc: "Fundamentals(.Net Framework, CLR, CTS, CLS)" }, { desc: "Literals, DataType and Operators" }, { desc: "String, Date Time and Arrays" }, { desc: "Polymorphism, Encapsulation and Inheritance (OOPS)" }, { desc: "Type Conversion, Anonymous and Dynamic Types" }, { desc: "Access Modifiers&Reserved Keywords" }, { desc: "WinForms, User & Custom Control, Debugging and Exception Handling" }, { desc: "Interfaces & Classes, Collections, Delegate & Events, Threading, Attributes " }, { desc: "Namespaces, Assemblies,Interoperability, Reflection, File I/O & Serialization, XML" }, { desc: "Static & Dynamic Class, Partial Classes & Methods" }, { desc: "Extension Method, Dependency Injection, Generics" }, { desc: "ADO.Net, LINQ and Entity Framework, JSON.Net" }, { desc: "WCF, WF, WPF & Web Services" }, { desc: "Design Pattern(Factory, Singleton, Observer, FACADE etc)" }, { desc: "Project" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "ASPNetMVC", courseName: "ASP Net MVC", imagePath: "..\..\image\csharp.png", fee: 25000, duration: "3 Month", courseDesc: "This ASP .Net Training in Jaipur provides an exhaustive coverage of .NET framework and ASP.NET technology features like ASP.NET Architecture, State Management, Master pages, User & Custom Controls and Data Access, Authentication and Authorization, Navigation, Web Configuration, Health Monitoring, Instrumentation, Web Services, AJAX and Deployment.ASP.Net Training in Jaipur", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "Programming Fundamentals" }], content: [{ desc: "Fundamentals(.Net Framework, CLR, CTS, CLS)" }, { desc: "Literals, DataType and Operators" }, { desc: "String, Date Time and Arrays" }, { desc: "Polymorphism, Encapsulation and Inheritance (OOPS)" }, { desc: "Type Conversion, Anonymous and Dynamic Types" }, { desc: "Access Modifiers&Reserved Keywords" }, { desc: "WinForms, User & Custom Control, Debugging and Exception Handling" }, { desc: "Interfaces & Classes, Collections, Delegate & Events, Threading, Attributes " }, { desc: "Namespaces, Assemblies,Interoperability, Reflection, File I/O & Serialization, XML" }, { desc: "Static & Dynamic Class, Partial Classes & Methods" }, { desc: "Extension Method, Dependency Injection, Generics" }, { desc: "ADO.Net, LINQ and Entity Framework, JSON.Net" }, { desc: "WCF, WF, WPF & Web Services" }, { desc: "Design Pattern(Factory, Singleton, Observer, FACADE etc)" }, { desc: "Project" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "CSharpAndVB", courseName: "C#.Net/VB.Net", imagePath: "..\..\image\csharp.png", fee: 15000, duration: "3 Month", courseDesc: "This ASP .Net Training in Jaipur provides an exhaustive coverage of .NET framework and ASP.NET technology features like ASP.NET Architecture, State Management, Master pages, User & Custom Controls and Data Access, Authentication and Authorization, Navigation, Web Configuration, Health Monitoring, Instrumentation, Web Services, AJAX and Deployment.ASP.Net Training in Jaipur", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "Programming Fundamentals" }], content: [{ desc: "Fundamentals(.Net Framework, CLR, CTS, CLS)" }, { desc: "Literals, DataType and Operators" }, { desc: "String, Date Time and Arrays" }, { desc: "Polymorphism, Encapsulation and Inheritance (OOPS)" }, { desc: "Type Conversion, Anonymous and Dynamic Types" }, { desc: "Access Modifiers&Reserved Keywords" }, { desc: "WinForms, User & Custom Control, Debugging and Exception Handling" }, { desc: "Interfaces & Classes, Collections, Delegate & Events, Threading, Attributes " }, { desc: "Namespaces, Assemblies,Interoperability, Reflection, File I/O & Serialization, XML" }, { desc: "Static & Dynamic Class, Partial Classes & Methods" }, { desc: "Extension Method, Dependency Injection, Generics" }, { desc: "ADO.Net, LINQ and Entity Framework, JSON.Net" }, { desc: "WCF, WF, WPF & Web Services" }, { desc: "Design Pattern(Factory, Singleton, Observer, FACADE etc)" }, { desc: "Project" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "BigData", courseName: "BigData", imagePath: "..\..\image\csharp.png", fee: 49000, duration: "3 Month", courseDesc: "This ASP .Net Training in Jaipur provides an exhaustive coverage of .NET framework and ASP.NET technology features like ASP.NET Architecture, State Management, Master pages, User & Custom Controls and Data Access, Authentication and Authorization, Navigation, Web Configuration, Health Monitoring, Instrumentation, Web Services, AJAX and Deployment.ASP.Net Training in Jaipur", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "Programming Fundamentals" }], content: [{ desc: "Fundamentals(.Net Framework, CLR, CTS, CLS)" }, { desc: "Literals, DataType and Operators" }, { desc: "String, Date Time and Arrays" }, { desc: "Polymorphism, Encapsulation and Inheritance (OOPS)" }, { desc: "Type Conversion, Anonymous and Dynamic Types" }, { desc: "Access Modifiers&Reserved Keywords" }, { desc: "WinForms, User & Custom Control, Debugging and Exception Handling" }, { desc: "Interfaces & Classes, Collections, Delegate & Events, Threading, Attributes " }, { desc: "Namespaces, Assemblies,Interoperability, Reflection, File I/O & Serialization, XML" }, { desc: "Static & Dynamic Class, Partial Classes & Methods" }, { desc: "Extension Method, Dependency Injection, Generics" }, { desc: "ADO.Net, LINQ and Entity Framework, JSON.Net" }, { desc: "WCF, WF, WPF & Web Services" }, { desc: "Design Pattern(Factory, Singleton, Observer, FACADE etc)" }, { desc: "Project" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
  {
    id: "FrontEndDesign", courseGroup: "Front-End Design", path: "/Course/",
    courses:
      [
        { id: "Html5CSS", courseName: "HTML5 & CSS", imagePath: "..\..\image\csharp.png", fee: 5000, duration: "2 Month", courseDesc: "This ASP .Net Training in Jaipur provides an exhaustive coverage of .NET framework and ASP.NET technology features like ASP.NET Architecture, State Management, Master pages, User & Custom Controls and Data Access, Authentication and Authorization, Navigation, Web Configuration, Health Monitoring, Instrumentation, Web Services, AJAX and Deployment.ASP.Net Training in Jaipur", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "aaa" }, { desc: "bbb" }], content: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "JSAndJQ", courseName: "JavaScript & JQuery", imagePath: "..\..\image\csharp.png", fee: 5000, duration: "3 Month", courseDesc: "This ASP .Net Training in Jaipur provides an exhaustive coverage of .NET framework and ASP.NET technology features like ASP.NET Architecture, State Management, Master pages, User & Custom Controls and Data Access, Authentication and Authorization, Navigation, Web Configuration, Health Monitoring, Instrumentation, Web Services, AJAX and Deployment.ASP.Net Training in Jaipur", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "aaa" }, { desc: "bbb" }], content: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "Angular", courseName: "Angular", imagePath: "..\..\image\csharp.png", fee: 5000, duration: "1 Month", courseDesc: "This ASP .Net Training in Jaipur provides an exhaustive coverage of .NET framework and ASP.NET technology features like ASP.NET Architecture, State Management, Master pages, User & Custom Controls and Data Access, Authentication and Authorization, Navigation, Web Configuration, Health Monitoring, Instrumentation, Web Services, AJAX and Deployment.ASP.Net Training in Jaipur", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "aaa" }, { desc: "bbb" }], content: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "React", courseName: "ReactJS", imagePath: "..\..\image\csharp.png", fee: 5000, duration: "2 Month", courseDesc: "This ASP .Net Training in Jaipur provides an exhaustive coverage of .NET framework and ASP.NET technology features like ASP.NET Architecture, State Management, Master pages, User & Custom Controls and Data Access, Authentication and Authorization, Navigation, Web Configuration, Health Monitoring, Instrumentation, Web Services, AJAX and Deployment.ASP.Net Training in Jaipur", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "aaa" }, { desc: "bbb" }], content: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
  {
    id: "Cloud", courseGroup: "Cloud", path: "/Course/",
    courses:
      [
        { id: "MSAzureAndAWS", courseName: "MS Azure / AWS", imagePath: "Images\abc.png", fee: 5000, duration: "3 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "DotNetOnAzure", courseName: ".Net on Azure", imagePath: "Images\abc.png", fee: 5000, duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "WebAPI", courseName: "Web API", imagePath: "Images\abc.png", fee: 5000, duration: "2 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "RSCIT", courseName: "RSCIT", imagePath: "..\..\image\csharp.png", fee: 27000, duration: "6 Month", courseDesc: "This ASP .Net Training in Jaipur provides an exhaustive coverage of .NET framework and ASP.NET technology features like ASP.NET Architecture, State Management, Master pages, User & Custom Controls and Data Access, Authentication and Authorization, Navigation, Web Configuration, Health Monitoring, Instrumentation, Web Services, AJAX and Deployment.ASP.Net Training in Jaipur", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "Programming Fundamentals" }], content: [{ desc: "Fundamentals(.Net Framework, CLR, CTS, CLS)" }, { desc: "Literals, DataType and Operators" }, { desc: "String, Date Time and Arrays" }, { desc: "Polymorphism, Encapsulation and Inheritance (OOPS)" }, { desc: "Type Conversion, Anonymous and Dynamic Types" }, { desc: "Access Modifiers&Reserved Keywords" }, { desc: "WinForms, User & Custom Control, Debugging and Exception Handling" }, { desc: "Interfaces & Classes, Collections, Delegate & Events, Threading, Attributes " }, { desc: "Namespaces, Assemblies,Interoperability, Reflection, File I/O & Serialization, XML" }, { desc: "Static & Dynamic Class, Partial Classes & Methods" }, { desc: "Extension Method, Dependency Injection, Generics" }, { desc: "ADO.Net, LINQ and Entity Framework, JSON.Net" }, { desc: "WCF, WF, WPF & Web Services" }, { desc: "Design Pattern(Factory, Singleton, Observer, FACADE etc)" }, { desc: "Project" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
  {
    id: "Database", courseGroup: "Database", path: "/Course/",
    courses:
      [
        { id: "SQLServer", courseName: "Sql Server", imagePath: "Images\abc.png", duration: "3 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "Oracle", courseName: "Oracle", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "MySQL", courseGroup: "Database", courseName: "My SQL", imagePath: "Images\abc.png", duration: "2 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "MongoDB", courseGroup: "Database", courseName: "Mongo DB", imagePath: "Images\abc.png", duration: "3 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
  {
    id: "Mobility", courseGroup: "Mobility(Xamarin Form)", path: "/Course/",
    courses:
      [
        { id: "Android", courseName: "Android", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "IOS", courseName: "IOS", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "Windows", courseName: "Windows", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
  {
    id: "Reporting", courseGroup: "Reporting", path: "/Course/",
    courses:
      [
        { id: "CrystalReport", courseName: "Crystal Report", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "SSRS", courseName: "SSRS", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
  {
    id: "ArtificialIntelligence", courseGroup: "Artificial Intelligence", path: "/Course/",
    courses:
      [
        { id: "UIPath", courseName: "UI Path", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "BluePrism", courseName: "Blue Prism", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
  {
    id: "Scripting", courseGroup: "Scripting", path: "/Course/",
    courses:
      [
        { id: "ASP", courseName: "ASP", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "PHP", courseName: "PHP", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
  {
    id: "MachineLearning", courseGroup: "Machine Learning", path: "/Course/",
    courses:
      [
        { id: "Python", courseName: "Python", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
  {
    id: "CRM", courseGroup: "CRM", path: "/Course/",
    courses:
      [
        { id: "MSDynamics", courseName: "MS Dynamics", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "Salesforce", courseName: "Salesforce", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
  {
    id: "CMS", courseGroup: "CMS", path: "/Course/",
    courses:
      [
        { id: "SharePoint2010To2016", courseName: "SharePoint 2010 to 2016", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "Office365", courseName: "Office 365", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: "aaa|bbb|ccc", prerequisites: "abc", content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
  {
    id: "ProgrammingFundamentals", courseGroup: "Programming Fundamentals", path: "/Course/",
    courses:
      [
        { id: "CAndDataStructure", courseName: "C & Data Structure", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "aaa" }, { desc: "bbb" }], content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "OOPSAndCPlusPlus", courseName: "OOPS And C++", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "aaa" }, { desc: "bbb" }], content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
        { id: "ClassicVisualBasic", courseName: "Classic Visual Basic", imagePath: "Images\abc.png", duration: "1 Month", courseDesc: "ABCD", objective: [{ desc: "aaa" }, { desc: "bbb" }], prerequisite: [{ desc: "aaa" }, { desc: "bbb" }], content: "AB|CA|DA", certificate: [{ id: "Course C1", header: "Course C1", body: "Course C1" }, { id: "CourseC2", header: "Course C2", body: "Course C2" }], other: "jj|kj|kj" },
      ]
  },
]
const ServiceMenu = [
  { id: "WebDesignAndDevelopment", menuName: "Web Design & Development", desc: "Web Design & Development", path: "/Service/", content: "Web Design & Development" },
  { id: "CloudDevelopment", menuName: "Cloud Development", desc: "Cloud Development", path: "/Service/", content: "Cloud Development|Cloud Development" },
  { id: "ProductDevelopment", menuName: "Product Development", desc: "Product Development", path: "/Service/", content: "Product Development|Product Development" },
  { id: "BusinessIntelligenceSolution", menuName: "Business Intelligence Solution", desc: "Business Intelligence Solution", path: "/Service/", content: "Business Intelligence Solution|Business Intelligence Solution" },
  { id: "MobileDevelopment", menuName: "Mobile Development", desc: "Mobile Development", path: "/Service/", content: "Mobile Development" },
  { id: "ContentManagement", menuName: "Content Management", desc: "Content Management", path: "/Service/", content: "Content Management" },
  { id: "ECommerceSolution", menuName: "E-Commerce Solution", desc: "E-Commerce Solution", path: "/Service/", content: "E-Commerce Solution" },
  { id: "ERPSolution", menuName: "ERP Solution", desc: "ERP Solution", path: "/Service/", content: "ERP Solution" },
  { id: "MaintenanceAndSupport", menuName: "Maintenance & Support", desc: "Maintenance & Support", path: "/Service/", content: "Maintenance & Support" }
]
const TrainingMenu = [
  { id: "AcademicInternship", menuName: "Academic Internship", path: "/Training/", content: "Academic Internship" },
  { id: "SummerInternship", menuName: "Summer Internship", path: "/Training/", content: "Summer Internship" },
  { id: "WinterInternship", menuName: "Winter Internship", path: "/Training/", content: "Winter Internship" },
  { id: "SpecializedTraining", menuName: "Specialized Training", path: "/Training/", content: "Specialized Training" },
  { id: "CorporateTraining", menuName: "Corporate Training", path: "/Training/", content: "Corporate Training" }
]
const routes = [
  { id: "Home", componentName: Home, path: "/" },
  { id: "Service", componentName: Service, path: "/Service", data: ServiceMenu },
  { id: "ServiceDetail", componentName: ServiceDetail, path: "/Service/:id", data: ServiceMenu },
  { id: "Training", componentName: Training, path: "/Training", data: TrainingMenu },
  { id: "TrainingDetail", componentName: TrainingDetail, path: "/Training/:id", data: TrainingMenu },
  { id: "Course", componentName: Course, path: "/Course", data: courseMenu },
  { id: "CourseDetail", componentName: CourseDetail, path: "/Course/:Group/:Course", data: courseMenu },
  { id: "Career", componentName: Career, path: "/Career", data: Career },
  { id: "Resource", componentName: Resource, path: "/Resource", data: Resource },
  { id: "ContactUs", componentName: ContactUs, path: "/ContactUs", data: [{ id: "Page1", header: "Contact Us 1", body: "This is Contact Us Page 1" }] },
]
const history = createHistory({
  basename: process.env.PUBLIC_URL,
});



class App extends Component {
  render() {
    const routeNode = routes.map((route) => {
      return (
        <PropsRoute exact path={route.path} component={route.componentName} data={route.data} />
      )
    });
    return (
      <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <div>
          <PageHeader courseMenu={courseMenu} serviceMenu={ServiceMenu} trainingMenu={TrainingMenu} />
          <br />
          <Switch>
            {routeNode}
          </Switch>
          <PageFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
