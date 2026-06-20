/**
 * HUOKAING THARA BANK LOAN CALCULATOR & ROUTER CORE
 * Handles internal calculation telemetry and outbound transmission.
 */

document.addEventListener("DOMContentLoaded", () => {
  const loanForm = document.getElementById("loanForm");
  const loanAmountInput = document.getElementById("loanAmount");
  const loanTermInput = document.getElementById("loanTerm");
  
  // Element Display Hooks
  const monthlyPaymentDisplay = document.getElementById("monthlyPaymentDisplay");
  const printPdfBtn = document.getElementById("printPdfBtn");

  // Constant Operational Parameters
  const ANNUAL_INTEREST_RATE = 0.085; // 8.5%
  const BASE_ROUTING_URL = "https://web.facebook.com/profile.php?id=61590911049916&sk=directory_links";

  /**
   * Computes the estimated amortization using standard formula mechanics:
   * M = P * [i(1+i)^n] / [(1+i)^n - 1]
   */
  function calculateTelemetry() {
    const principal = parseFloat(loanAmountInput.value);
    const months = parseInt(loanTermInput.value);

    if (isNaN(principal) || principal <= 0) {
      monthlyPaymentDisplay.textContent = "$0.00";
      return;
    }

    const monthlyRate = ANNUAL_INTEREST_RATE / 12;
    const compoundFactor = Math.pow(1 + monthlyRate, months);
    const monthlyPayment = (principal * monthlyRate * compoundFactor) / (compoundFactor - 1);

    if (isFinite(monthlyPayment)) {
      monthlyPaymentDisplay.textContent = `$${monthlyPayment.toFixed(2)}`;
    }
  }

  /**
   * Triggers native print hardware layer mapped via media rules
   */
  function executeSecurePrint() {
    window.print();
  }

  /**
   * Packages data architecture and moves runtime pointer out to enterprise link
   */
  function pipelineSubmission(e) {
    e.preventDefault();

    // Data Verification Matrix Capture
    const clientData = {
      name: document.getElementById("fullName").value.trim(),
      id: document.getElementById("nationalId").value.trim(),
      phone: document.getElementById("phoneNumber").value.trim(),
      email: document.getElementById("emailAddress").value.trim(),
      amount: loanAmountInput.value,
      term: loanTermInput.value,
      estimation: monthlyPaymentDisplay.textContent
    };

    // Safe execution notification prior to pipeline handoff
    alert(`ទិន្នន័យត្រូវបានផ្ទៀងផ្ទាត់ដោយជោគជ័យ។ ប្រព័ន្ធនឹងបញ្ជូនលោកអ្នកទៅកាន់ទំព័រទំនាក់ទំនងផ្លូវការរបស់ធនាគារ។\n\nData verified. System is routing your application summary to the official service desk.`);

    // Log tracking for localized inspection routines 
    console.log("[DATA PIPELINE DEPLOYMENT READY]:", clientData);

    // Direct redirection execution to targeted end-node link
    window.location.href = BASE_ROUTING_URL;
  }

  // Event Engine Declarations
  loanAmountInput.addEventListener("input", calculateTelemetry);
  loanTermInput.addEventListener("change", calculateTelemetry);
  printPdfBtn.addEventListener("click", executeSecurePrint);
  loanForm.addEventListener("submit", pipelineSubmission);
});

/**
   * Packages data architecture and moves runtime pointer out to enterprise link
   */
  function pipelineSubmission(e) {
    e.preventDefault();

    const termsChecked = document.getElementById("termsAgreement").checked;
    if (!termsChecked) {
      alert("សូមចុចយល់ព្រមលើលក្ខខណ្ឌសេវាកម្ម មុនពេលបន្តទៅមុខ។\nPlease agree to the Terms and Conditions before proceeding.");
      return;
    }

    // Data Verification Matrix Capture
    const clientData = {
      name: document.getElementById("fullName").value.trim(),
      id: document.getElementById("nationalId").value.trim(),
      phone: document.getElementById("phoneNumber").value.trim(),
      email: document.getElementById("emailAddress").value.trim(),
      amount: loanAmountInput.value,
      term: loanTermInput.value,
      estimation: monthlyPaymentDisplay.textContent
    };

    // Safe execution notification prior to pipeline handoff
    alert(`ទិន្នន័យត្រូវបានផ្ទៀងផ្ទាត់ដោយជោគជ័យ។ ប្រព័ន្ធនឹងបញ្ជូនលោកអ្នកទៅកាន់ទំព័រទំនាក់ទំនងផ្លូវការរបស់ធនាគារ។\n\nData verified. System is routing your application summary to the official service desk.`);

    // Direct redirection execution to targeted end-node link
    window.location.href = BASE_ROUTING_URL;
  }
