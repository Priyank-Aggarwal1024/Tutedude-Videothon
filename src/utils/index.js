export const validateTeamMemberError = (formData, member) => {
  const memberData = formData.members[member - 1];
  for (const key of Object.keys(memberData)) {
    if (!memberData[key]) {
      return {
        error: true,
        message: `Please fill in the ${key.replace("-", " ")}`,
        name: key,
      };
    }
  }

  // Validate email format if email field exists
  if (memberData.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(memberData.email)) {
      return {
        error: true,
        message: "Please enter a valid email address",
        name: "email",
      };
    }
  }

  // Validate WhatsApp number if it exists
  if (memberData["whatsapp-no"]) {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(memberData["whatsapp-no"])) {
      return {
        error: true,
        message: "Please enter a valid 10-digit WhatsApp number",
        name: "whatsapp-no",
      };
    }
  }

  // Validate member name if it exists
  if (memberData["member-name"]) {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!nameRegex.test(memberData["member-name"])) {
      return {
        error: true,
        message: "Name should only contain letters and spaces",
        name: "member-name",
      };
    }
  }

  // If all validations pass
  return {
    error: false,
    message: "All fields are valid",
    name: null,
  };
};
