import axios from "axios";

export class SurveyService {
  static async getSurvey(id) {
    const { data } = await axios.get(
      `https://pulse.rexsoftproduction.com/api/surveys/${id}`
    );
    return data;
  }

  static async getCompanies() {
    const { data } = await axios.get(
      `https://pulse.rexsoftproduction.com/api/companies`
    );
    return data;
  }

  static async sendAnswers(id, payload) {
    await axios.post(
      `https://pulse.rexsoftproduction.com/api/surveys/${id}/answers`,
      {
        questions: payload,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
