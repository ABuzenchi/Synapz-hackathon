import React, { useState } from 'react';
import './courseDetails.css';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

interface Module {
  title: string;
  content: string;
}

interface CourseDetailProps {
  iconUrl: string;
  title: string;
  author: string;
  duration: string;
}

export function CourseDetails({ iconUrl, title, author, duration }: CourseDetailProps) {
  const navigate = useNavigate();

 const modules: Module[] = [
   {
  title: 'Introduction to Office 365',
  content: `
**Welcome to Office 365!** This modern suite of Microsoft applications is designed to deliver a connected, flexible, and efficient working experience. Office 365 is not just about Word, Excel, or PowerPoint — it’s a complete ecosystem of cloud-based tools that help you collaborate, communicate, and create from anywhere. Whether you work individually, in a small team, or across a large organization, Office 365 provides the resources you need to work smarter, not harder.

**Navigating Office 365** begins with the main dashboard and app launcher. From here, you can quickly access all integrated apps such as Word, Excel, PowerPoint, Outlook, Teams, and OneDrive. The interface is intuitive and consistent across desktop, web, and mobile devices, ensuring a seamless experience no matter where you log in.  

One of the biggest advantages of Office 365 is **cloud-based work**. Every document saved in OneDrive is accessible from any device connected to the internet. There’s no need to send files by email or worry about losing data — cloud storage ensures automatic synchronization and protection of your information. Additionally, previous file versions can easily be restored, allowing you to track the history of your work and recover earlier edits when needed.

**Collaboration** is another core strength of Office 365. Multiple users can work simultaneously on the same Word, Excel, or PowerPoint file, seeing each other’s edits in real time. Instead of sending multiple versions of the same document back and forth, you can simply share a link with your colleagues. The built-in commenting and reviewing features make communication more direct and efficient, cutting down on unnecessary emails and speeding up feedback loops.

Furthermore, Office 365 applications are **deeply integrated** with one another. Outlook connects directly with Teams, and OneDrive files can be accessed right from your emails or chats. For instance, you can schedule a Teams meeting from within Outlook, share documents during a video call, and co-edit files without ever leaving the app. This level of integration keeps your workflow smooth and your team connected.  

**The key benefits of Office 365 include:**
- **Flexibility:** Access your files and apps from any device, anytime.  
- **Security:** Advanced data protection and control over information sharing.  
- **Efficiency:** Real-time collaboration and elimination of duplicate file versions.  
- **Integration:** A unified platform connecting all Microsoft applications seamlessly.  

By the end of this module, you will know how to navigate Office 365 efficiently, use OneDrive for file storage and sharing, collaborate effectively on shared documents, and take full advantage of Microsoft’s integrated ecosystem. The goal is to help you build a modern digital workflow that saves time, boosts productivity, and simplifies your work — wherever you are and on whichever device you choose to use.
  `
},
    {
  title: 'Microsoft Word',
  content: `
**Welcome to Microsoft Word!** As one of the most widely used word processing applications in the world, Microsoft Word is an essential tool for creating professional, polished, and well-structured documents. Whether you’re writing a simple letter, a detailed report, or a collaborative proposal, Word gives you everything you need to produce high-quality content efficiently and with confidence.

**Getting Started with Word** begins with understanding the layout and navigation of the workspace. The Ribbon at the top organizes tools into logical tabs such as Home, Insert, Layout, and Review, allowing you to easily access formatting, design, and editing features. The Quick Access Toolbar and customizable shortcuts make it possible to tailor Word to your workflow, saving time and improving productivity.

A major strength of Microsoft Word lies in its **formatting capabilities**. You can apply styles, fonts, and themes to maintain consistency throughout your documents, ensuring a professional appearance. The built-in templates provide a quick starting point for common documents such as resumes, letters, and reports, helping you focus more on content than on design. Additionally, features like SmartArt and Tables let you organize information visually for greater clarity and impact.

**Collaboration and cloud integration** take Word beyond traditional word processing. With Office 365, you can store your documents in OneDrive and work on them simultaneously with others. Co-authoring allows multiple users to make edits in real time, while comments and track changes make feedback simple and transparent. These features are especially valuable for teams, helping everyone stay aligned without sending multiple file versions by email.

**Reviewing and editing tools** are also essential to the Word experience. You can check grammar and spelling automatically, use the built-in Editor for writing suggestions, and track every change made to your document. Version history allows you to compare earlier drafts and restore previous versions if needed — a great feature for long-term projects and collaborative writing.

**The key benefits of Microsoft Word include:**
- **Professional formatting:** Create visually consistent and well-structured documents.  
- **Ease of use:** Intuitive interface and customizable tools for faster work.  
- **Collaboration:** Real-time co-authoring and integrated commenting.  
- **Cloud access:** Work from anywhere using OneDrive and the online version of Word.  

By the end of this module, you will know how to navigate the Word interface, apply formatting and styles, collaborate effectively with others, and use Word’s powerful editing tools to create documents that are clear, consistent, and professional. Whether you’re drafting quick notes or preparing formal reports, Microsoft Word helps you turn your ideas into polished, shareable results.
  `
},

   {
  title: 'Microsoft Excel',
  content: `
**Unlocking the Power of Excel**

Microsoft Excel is far more than just a spreadsheet program — it’s a powerful tool for data organization, analysis, and visualization. Whether you’re tracking expenses, managing projects, or analyzing business performance, Excel provides the flexibility and precision needed to turn raw data into meaningful insights. In this module, you will explore Excel’s most valuable features, from basic formulas to dynamic data analysis tools.

**Getting Started with Excel** begins with understanding the Excel interface — the Ribbon, cells, columns, rows, and worksheets. You will learn how to navigate efficiently, enter and format data, and structure spreadsheets for clarity and accuracy. Proper organization is key, as it allows formulas and functions to work seamlessly across your workbook.

A core part of this module focuses on **formulas and functions**, the foundation of Excel’s analytical power. You will learn how to write and debug essential formulas, including SUM, AVERAGE, IF, VLOOKUP, and the more modern XLOOKUP. By mastering these, you’ll be able to perform quick calculations, compare data, and automate repetitive tasks. We’ll also explore relative and absolute cell references, ensuring your formulas behave exactly as expected when copied or expanded.

Excel also excels at **visualizing data**. Using conditional formatting, you’ll highlight trends and patterns directly within your data tables, making important figures stand out instantly. You’ll create and customize professional charts — including bar, line, pie, and scatter plots — to present data clearly and effectively. You’ll also learn to build dashboards that combine multiple charts and tables into one dynamic, interactive view.

Next, we’ll explore **data management and analysis**. You’ll discover how to sort and filter large datasets to find exactly what you need, convert data into structured tables, and use slicers for quick filtering. The module also covers PivotTables and PivotCharts, Excel’s most powerful tools for summarizing and comparing complex data sets. With just a few clicks, you can uncover trends, totals, and comparisons that would take hours to calculate manually.

Finally, we’ll cover **data accuracy and protection**. You’ll learn how to use data validation to control input values, ensuring your spreadsheets stay clean and reliable. Basic worksheet protection techniques will help you safeguard your work and prevent accidental edits or data loss.

**Examples and exercises included:**
- Build a **dynamic personal budget tracker** using formulas and conditional formatting.  
- Analyze **sales data** with PivotTables and PivotCharts.  
- Create an **interactive dashboard** with linked charts and slicers.  
- Use **VLOOKUP** to combine data from multiple worksheets and ensure consistency across reports.  

By the end of this module, you’ll understand how to organize, analyze, and present data effectively using Microsoft Excel. You’ll be equipped with the essential skills to make data-driven decisions, automate calculations, and transform complex information into clear, actionable insights.
  `
}
,
   {
  title: 'Microsoft PowerPoint',
  content: `
**Creating Impactful Presentations**

Microsoft PowerPoint is one of the most powerful and widely used tools for creating presentations that inform, engage, and inspire. Whether you’re pitching a new idea, delivering a training session, or summarizing data for management, PowerPoint helps you transform your message into a visually compelling story. In this module, you will learn how to design slides that capture attention, communicate clearly, and leave a lasting impression.

**Getting Started with PowerPoint** begins with understanding the workspace, including the Ribbon, slide thumbnails, and design views. You will learn how to create a new presentation, select appropriate slide layouts, and apply professional themes to maintain consistency. We’ll also explore how to use the Slide Master — one of PowerPoint’s most powerful tools — to create templates that align with your organization’s brand identity and save time when building future presentations.

A key part of this module focuses on **slide design and visual principles**. You will learn how to apply the “less is more” approach to slides, focusing on clarity, balance, and visual hierarchy. By using color, typography, and spacing effectively, you can ensure your audience focuses on your key messages. We’ll also discuss how to select the right visuals — charts, icons, and infographics — to support your content rather than overwhelm it.

PowerPoint also offers robust **multimedia and animation features**. You’ll practice inserting and editing high-quality images, videos, and audio clips to make your slides more dynamic. We’ll cover how to use transitions and object animations strategically — using them sparingly and purposefully to enhance, not distract from, your presentation. You’ll also learn to use features like Morph and Zoom to create fluid, modern motion effects that make your slides come alive.

Beyond design, PowerPoint supports **interactive and engaging presentations**. You’ll discover how to add hyperlinks, action buttons, and sections to build navigation menus or interactive learning modules. This allows you to move beyond traditional linear slides and create flexible presentations that adapt to your audience’s needs.

Finally, this module covers **presentation delivery tools**. You will learn how to use Presenter View to manage your notes, see upcoming slides, and stay on track during your talk. Rehearsal tools will help you time your delivery and build confidence before presenting live. You’ll also learn how to export your presentation as a video or PDF for easy sharing and distribution.

**Examples and exercises included:**
- Design a **5-slide pitch deck** for a new product idea, applying design principles and branding consistency.  
- Create a **training presentation** that includes embedded video and custom animations.  
- Use the **Slide Master** to develop a custom company template for future use.  
- Practice delivering your presentation using **Presenter View** and rehearsal timing tools.  

By the end of this module, you’ll be able to plan, design, and deliver presentations that are visually engaging, logically structured, and professionally executed. You’ll understand how to balance design and content to communicate effectively — and use PowerPoint not just as a tool, but as a storytelling platform that amplifies your ideas.
  `
}
,
   {
  title: 'Microsoft Teams',
  content: `
**Collaborating with Microsoft Teams**

Microsoft Teams is the central hub for modern workplace collaboration. It brings together people, conversations, files, and tools in one unified platform, enabling efficient communication and teamwork regardless of location. In this module, you will learn how to organize your workspace, manage communication effectively, collaborate on files, and integrate Teams with other Microsoft 365 apps for a seamless digital experience.

**Getting Started with Teams** begins with understanding the structure of the platform. You will explore how to create and manage Teams — dedicated spaces for groups or projects — and how to organize Channels within them. Channels can be **standard**, **private**, or **shared**, each serving different collaboration needs. This structure allows teams to keep discussions, documents, and tasks organized and easy to access.

Communication is at the heart of Teams. You will learn to use **chat** for direct messaging, **group conversations** for team-wide discussions, and **@mentions** to get someone’s attention. We’ll explore how to use reactions, replies, and message formatting to keep conversations clear and engaging. You’ll also learn to manage notifications effectively, ensuring you stay informed without feeling overwhelmed.

A major focus of this module is **meetings and calls**. You’ll practice scheduling, joining, and managing video meetings within Teams — including inviting participants, sharing your screen, and recording sessions. You will explore useful features such as **virtual backgrounds**, **live captions**, and **meeting chat**, which make remote collaboration more interactive and inclusive. You’ll also discover how to use **Breakout Rooms** to facilitate small group discussions during larger meetings.

Collaboration in Teams extends beyond chat and meetings. You will learn how to **co-author documents** — editing Word, Excel, or PowerPoint files simultaneously with colleagues, directly within the Teams interface. We’ll also look at how files are automatically stored in SharePoint or OneDrive, making them secure, versioned, and accessible at any time. 

In addition, Teams offers **integration with other Microsoft 365 apps**, allowing you to turn any channel into a productivity hub. You can add tabs for apps like Planner to manage project tasks, OneNote for shared notes, or Power BI for dashboards. This flexibility transforms Teams into a central workspace where communication and productivity coexist.

**Examples and exercises included:**
- Create a **new Team** for a project and organize it into three relevant Channels.  
- Host a **10-minute video meeting**, share your screen, and record the session.  
- Collaborate with a colleague to **co-edit a Word document** in the “Files” tab.  
- Add a **Microsoft Planner tab** to track and assign project tasks.  

By the end of this module, you will be able to confidently use Microsoft Teams as your main collaboration platform — creating Teams and Channels, communicating effectively, running productive meetings, and integrating other apps to streamline teamwork. You’ll understand how Teams connects people, information, and workflows, helping your organization stay aligned and efficient in a hybrid, digital-first environment.
  `
}
  ];

  const [selectedModuleIndex, setSelectedModuleIndex] = useState(0);

  return (
    <div className="course-detail-container">
      {/* Sidebar cu module */}
      <div className="module-sidebar">
        <div className="course-header">
          <img src={iconUrl} alt={title} className="course-icon" />
          <h2 className="course-title">{title}</h2>
          <p className="course-author">{author}</p>
          <p className="course-duration">{duration}</p>
        </div>
        <ul className="module-list">
          {modules.map((module, index) => (
            <li
              key={index}
              className={`module-item ${index === selectedModuleIndex ? 'active' : ''}`}
              onClick={() => setSelectedModuleIndex(index)}
            >
              {module.title}
            </li>
          ))}
        </ul>
         <button 
          className="back-dashboard-button"
          onClick={() => navigate('/user-dashboard')}
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Conținut modul */}
      <div className="module-content">
        {/* Buton de întoarcere la dashboard */}
       

        <h3>{modules[selectedModuleIndex].title}</h3>
        <ReactMarkdown>{modules[selectedModuleIndex].content}</ReactMarkdown>
      </div>
    </div>
  );
}
