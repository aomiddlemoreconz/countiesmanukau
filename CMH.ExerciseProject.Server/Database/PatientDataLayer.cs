using CMH.ExerciseProject.Server.Model;

namespace CMH.ExerciseProject.Server.Database
{
    public interface IPatientDataLayer
    {
        Task<List<Patient>> GetPatients();
        Task<List<Patient>> SearchPatients(string patientName);
        Task<int> AddPatient(Patient patient);
        Task<int> DeletePatient(int patientId);
    }
    public class PatientDataLayer : IPatientDataLayer
    {
        private string AccessKey = String.Empty;
        public PatientDataLayer() { }

        private bool Connected() => AccessKey == "000Orange^*";


        public Task<int> AddPatient(Patient patient)
        {
            if (Connected())
            {
                /**
                 Todo: ADD Operation
                 */
            }
            throw new NotImplementedException();
        }

        public Task<int> DeletePatient(int patientId)
        {
            if (Connected())
            {
                /**
                 Todo: DELETE Operation
                 */
            }
            throw new NotImplementedException();
        }

        public Task<List<Patient>> GetPatients()
        {
            if (Connected())
            {
                /**
                 Todo: Get Operation
                 */
            }
            throw new NotImplementedException();
        }

        public Task<List<Patient>> SearchPatients(string patientName)
        {
            if (Connected())
            {
                /**
                 Todo: Search Operation
                 */
            }
            throw new NotImplementedException();
        }

    }
}
