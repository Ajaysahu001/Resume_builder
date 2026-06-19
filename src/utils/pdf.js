export const exportToPDF = async (elementId, filename = 'resume.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found`);
  }

  const html2pdf = (await import('html2pdf.js')).default;

  const opt = {
    margin: [10, 10, 10, 10],
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
      logging: false,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    },
    pagebreak: {
      mode: ['avoid-all', 'css', 'legacy'],
      avoid: ['.section', 'h1', 'h2', 'h3'],
    },
  };

  try {
    await html2pdf().set(opt).from(element).save();
    return true;
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    throw error;
  }
};

/**
 * Print resume preview
 * @param {string} elementId - ID of the element to print
 */
export const printResume = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found`);
  }

  const printWindow = window.open('', '_blank');
  const printContent = element.innerHTML;
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            color: #1e293b;
            line-height: 1.6;
          }
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
            }
          }
        </style>
      </head>
      <body>
        ${printContent}
      </body>
    </html>
  `);
  
  printWindow.document.close();
  printWindow.focus();
  
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 250);
};

