import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatUser1593658116370 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
			name: 'users',
			columns: [
				{
					name: 'id',
					type: 'int',
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment',
				},
				{
					name: 'email',
					type: 'varchar',
					isUnique: true,
				},
				{
					name: 'password',
					type: 'varchar',
                },
				{
					name: 'birth',
					type: 'varchar',
				},
			],
		}))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
