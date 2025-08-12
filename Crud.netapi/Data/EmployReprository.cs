using Microsoft.EntityFrameworkCore;

namespace Crud.netapi.Data
{
    public class EmployReprository
    {
        private readonly AppDBContext _appDbcontext;
        public EmployReprository(AppDBContext appDbcontext)
        {
            _appDbcontext = appDbcontext;    
        }
        public async Task AddemployAsync( employ Employ )
        {
            await _appDbcontext.Set<employ>().AddAsync(Employ);
            await _appDbcontext.SaveChangesAsync();
        }
        public async Task<List<employ>> GetallEmployeeAsync()
        {
           return  await _appDbcontext.Employes.ToListAsync();     
        }

        public async Task<employ> getemploybyId(int id)
        {
            return await _appDbcontext.Employes.FindAsync(id);
        }

        public async Task UpdateEmploybyIdAsync(int id , employ model)
        {
            var employ = await _appDbcontext.Employes.FindAsync(id);
            if(employ == null)
            {
                throw new Exception("No Employ Found");
            }
            employ.Name = model.Name;
            employ.Salary = model.Salary;
            employ.age = model.age;
            await _appDbcontext.SaveChangesAsync();
        }

        public async Task DeleteEmployeByidAsync(int id)
        {
            var employ = await _appDbcontext.Employes.FindAsync(id);
            _appDbcontext.Employes.Remove(employ);
            await _appDbcontext.SaveChangesAsync();

        }
     }
}
