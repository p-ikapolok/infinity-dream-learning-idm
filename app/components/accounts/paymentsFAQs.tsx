/* ================= FAQ ================= */

function PaymentsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    "My payment link is not accessible on e-Hub / I don’t see a payment plan",
    "I don’t see the prompt to make payment on e-Hub",
    "The payment link is not working",
    "I have paid but it is not reflected on the payment tab.",
    "My payment is reflected on eHub but I still see the prompt to pay",
    "Payment Deadline Extensions",
    "Challenges with Ozow payment",
    "I made the payment but I have been dropped from the programme",
    "Payment via Flutterwave pending confirmation",
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-6">
        Everything you need to know about the payments
      </h2>

      <div className="space-y-3">
        {faqs.map((q, i) => (
          <div key={i} className="border-b pb-3">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center text-left"
            >
              <span>{q}</span>
              <ChevronDown />
            </button>

            {openIndex === i && (
              <p className="text-sm text-gray-500 mt-2">
                Answer content goes here...
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Help Box */}
      <div className="bg-gray-100 p-6 mt-8 rounded-lg text-center">
        <h3 className="font-semibold mb-2">Need assistance?</h3>
        <p className="text-sm text-gray-500 mb-3">
          Please submit a support ticket through our Zendesk
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Open Zendesk
        </button>
      </div>
    </div>
  );
}
