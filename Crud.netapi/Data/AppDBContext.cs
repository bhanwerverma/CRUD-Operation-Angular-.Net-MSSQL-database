using Microsoft.EntityFrameworkCore;

namespace Crud.netapi.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options) { }

        public DbSet<employ> Employes { get; set; }
    }
}
