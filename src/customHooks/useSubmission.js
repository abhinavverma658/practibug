
import { useEffect } from "react";

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_APP_SCRIPT_WEB_APP_URL;

export const useSubmission = () => {
    useEffect(() => {
        const form = document.getElementById("notifyForm");

        if (!form) {
            return undefined;
        }

        const handleSubmit = async (e) => {
            e.preventDefault();

            const emailInput = document.getElementById("notifyEmail");
            const message = document.getElementById("notifyMessage");
            const button = form.querySelector("button");

            if (!emailInput || !message || !button) {
                return;
            }

            const email = emailInput.value.trim();

            if (!email) {
                message.textContent = "Please enter your email address.";
                return;
            }

            button.disabled = true;
            button.textContent = "Submitting...";

            try {
                if (!SCRIPT_URL) {
                    throw new Error("VITE_GOOGLE_APP_SCRIPT_WEB_APP_URL is not configured");
                }

                let ip = "";

                try {
                    const ipResponse = await fetch("https://api.ipify.org?format=json");
                    const ipData = await ipResponse.json();
                    ip = ipData.ip || "";
                } catch (ipError) {
                    console.log("Could not get IP address");
                }

                const formData = new URLSearchParams();
                formData.append("email", email);
                formData.append("ip", ip);

                await fetch(SCRIPT_URL, {
                    method: "POST",
                    body: formData,
                    mode: "no-cors"
                });

                message.textContent = "Thank you! We'll notify you when we launch.";
                emailInput.value = "";
            } catch (error) {
                console.error(error);
                message.textContent = "Something went wrong. Please try again.";
            } finally {
                button.disabled = false;
                button.innerHTML = 'Notify Me <span>♧</span>';
            }
        };

        form.addEventListener("submit", handleSubmit);

        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
    }, []);
};