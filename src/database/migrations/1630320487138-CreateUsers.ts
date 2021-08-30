import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1626087062260 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id', type: 'UNIQUEIDENTIFIER', isPrimary: true, default: 'NEWID()',
        },
        { name: 'name', type: 'varchar' },
        { name: 'email', type: 'varchar', isUnique: true },
        { name: 'created_at', type: 'datetime', default: 'GETDATE()' },
        { name: 'updated_at', type: 'datetime', default: 'GETDATE()' },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
